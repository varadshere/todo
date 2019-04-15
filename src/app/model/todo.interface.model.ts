export interface InsertTodo {
    appId: string;
    create?: (CreateEntity)[] | null;
}
export interface UpdateTodo {
    appId: string;
    id: string;
    title: string;
    text: string;
}
export interface CreateEntity {
    appId: string;
    todo?: (TodoEntity)[] | null;
}
export interface TodoEntity {
    id: string;
    title: string;
    text: string;
}
