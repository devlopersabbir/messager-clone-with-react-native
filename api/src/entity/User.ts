import { Column, Entity } from "typeorm";
import { Status } from "../utils/enum";
import Modal from "./Modal/Modal";

@Entity("Users")
export class User extends Modal {
  @Column({ unique: true, nullable: false })
  username: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  image?: string;

  @Column({ type: "enum", enum: Status, default: Status.OFFLINE })
  status?: string;

  @Column()
  accessToken?: string;
}
