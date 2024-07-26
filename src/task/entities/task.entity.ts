import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export enum TaskStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
}

@Entity("task")
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        type: 'enum',
        enum: TaskStatus,
        default: TaskStatus.PENDING,
    })
    status: TaskStatus;


    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;
    
}


