import { Controller, Res, Get } from '@nestjs/common';
import { PeopleService } from './people.service';
import { Response } from 'express';

@Controller('people')
export class PeopleController {

    constructor(
        private service: PeopleService
    ){}

    @Get()
    list(@Res() response: Response){
        const list = this.service.list();
        return response.status(200).send(list);
    }
}
