import { literal } from 'sequelize';
import {  Order } from 'sequelize';

export default class Pagination {
    private perPage: number = 10
    private page: number = 1
    private totalRows: number = 0
    private sort: string = ""

    constructor(totalRows: number, perPage: string, page: string, sort: string) {
        if (perPage && perPage.trim() && Number(perPage) > 0) {
            this.perPage =  Number(perPage)
        }
        if (page && page.trim() && Number(page) > 0) {
            this.page = Number(page)
        }

        if (sort && sort.trim()) {
            this.sort = sort
        }
        this.totalRows = totalRows
    }
    
    public getTotalPage() {
        return Math.ceil(this.totalRows / this.perPage)
    }

    public getSort() : Order{
        if (!this.sort) {
            return []
        }

        let s = ""
        if (this.sort.startsWith("-")) {
            s = `${this.sort.replace('-', '')} DESC`
        } else {
            s = `${this.sort} ASC`
        }
        return [literal(s)]
    }

    public getPage() {
        return this.page
    }

    public getPerPage() {
        return this.perPage
    }

    public getOffSet() {
        return (this.page - 1) * this.perPage
    }
}

