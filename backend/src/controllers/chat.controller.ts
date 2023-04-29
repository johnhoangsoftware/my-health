import { StatusCodes } from "http-status-codes";
import ErrorWrapperHandler from "../utils/ErrorWrapperHandler";
import { Application, NextFunction, Request, Response } from 'express'
import { chatService } from "../services";
import { CreateMessageDTO } from "../dtos/message.dto";

export const socketSetup = (io: any, app: Application) => {
    app.set("io", io)
    io.on("connection", (socket: any) => {
        socket.on("join room", (rooms: string[]) => {
            rooms.forEach(r => {
                socket.join(r)
            })
        })
    })
}

// [GET] /chat
export const allChatPreview = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const userId = req.auth?.id
    const chatPreview = await chatService.allChatPreview(userId)
    return res.status(StatusCodes.OK).json({
        data: chatPreview
    });
})

// [POST] /chat/:id
export const inbox = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const userId = req.auth?.id
    const partnerId = req.params.id
    const data = await chatService.inbox(userId, partnerId)
    return res.status(StatusCodes.OK).json({
        data: data
    });
})


// [POST] /chat/:id/message
export const sendMessage = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const userId = req.auth?.id
    const partnerId = req.params.id
    const d = await chatService.sendMessage(userId, partnerId, req.body as CreateMessageDTO)
    return res.status(StatusCodes.OK).json({
        data: d
    });
})
