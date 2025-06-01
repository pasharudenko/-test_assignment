export class MessageEntity {
  id: number;
  userId: number;
  content: string;
  timestamp: Date;

  private constructor(entity: MessageEntity) {
    this.id = entity.id;
    this.userId = entity.userId;
    this.content = entity.content;
    this.timestamp = entity.timestamp;
  }

  static getEntity(entity: MessageEntity) {
    return new MessageEntity(entity);
  }
}
