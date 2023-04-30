import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        default: 'test@test.pl'
    })
    email: string

    @ApiProperty({
        default: 'Mr. Credo'
    })

    fullName: string

    @ApiProperty({
        default: '123'
    })

    password: string
}
