import { StatusCodes } from "http-status-codes";
import { CreateMessageDTO } from "../dtos/message.dto";
import CustomError from "../error/CustomError";
import { Chat, Message, User } from "../models";
import { Sequelize } from "sequelize-typescript";
import {Op} from 'sequelize'
import { generateUUID } from "../utils/uuid";
import { validateCreateMessage } from "../validator/message";

const findChat = async(mem1: string, mem2: string) => {
    const chat =  await Chat.findOne({
        where: {
            userId: {
                [Op.or]: [mem1, mem2]
            }
        },
        attributes: ["chatId"],
        group: ["chatId"],
        having: Sequelize.where(Sequelize.fn("COUNT", Sequelize.col("chatId")), "=", 2)
    })

    return chat?.chatId
}

export const allChatPreview = async (userId: string) => {
    console.log(userId)
    const user = await User.findByPk(userId)
    if (!user) {
        throw new CustomError(StatusCodes.NOT_FOUND, `User with ID: ${userId} not found`)
    }

    const chatIds = await Chat.findAll({
        attributes: ["chatId"],
        where: { userId },
        group: "chatId"
    })

    return await Chat.findAll({
        where: {
            userId: {
                [Op.not]: userId
            },
            chatId: {
                [Op.in]: chatIds.map((c: { chatId: string }) => c.chatId)
            }
        },
        attributes: {
            exclude: ["createdAt", "deletedAT"]
        },
        include: [
            {
                model: Message,
                limit: 1,
                order: [
                    [Sequelize.literal('createdAt'), 'DESC']
                ],
                include: [{
                    model: User,
                    attributes: ["userId", "name", "avatar"]
                }]
            },
            {
                model: User,
                attributes: ["userId", "name", "avatar"]
            }
        ]
    })
}

export const inbox = async(userId: string , partnerId: string) => {
    const partner = await User.findByPk(partnerId)
    if (!partner) {
        throw new CustomError(StatusCodes.NOT_FOUND, `User with ID: ${partnerId} not found`)
    }

    const chatId = await findChat(userId, partnerId)
    if (!chatId) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Could not find chat`)
    }

    const messages = await Message.findAll({
        where: { chatId },
        include: [{
            model: User,
            attributes: ["userId", "name", "avatar"]
        }],
        order: [
            [Sequelize.literal('createdAt'), 'ASC']
        ]
    })

    return {chatId, messages}
}

export const sendMessage = async (userId: string, partnerId: string, msg: CreateMessageDTO) => {
    let chatId = await findChat(userId, partnerId)
    if (!chatId) {
        chatId = generateUUID()
        await Chat.bulkCreate([
            {
                chatId: chatId,
                userId: userId
            },
            {
                chatId: chatId,
                userId: partnerId
            }
        ])
    }

    msg = validateCreateMessage(msg)
    
    const message = await Message.create({
        content: msg.content,
        type: msg.type || "TEXT",
        chatId: chatId,
        senderId: userId
    })

    return {chatId, message: message.dataValues}
}