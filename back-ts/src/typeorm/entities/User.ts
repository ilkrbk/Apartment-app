import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn('increment')
    UserID: number;
    @Column({ type: 'date' })
    DateJoined: string;
    @Column()
    Username: string;
    @Column()
    PasswordHash: string;
    @Column()
    IsAdmin: boolean;
}
