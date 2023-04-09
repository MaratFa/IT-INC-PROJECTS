type MessageType = {
    id: number
    name: string
}

type DialogType = {
    id: number
    name: string
}

type PostType = {
    id: number
    message: string
    likeCount: number
}

type ProfilePageType = {
    posts: Array<PostType>
}

type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType    
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 12},
            {id: 2, message: 'It\'s my first post', likeCount: 11},
            {id: 3, message: 'Blabla', likeCount: 11},
            {id: 4, message: 'Dada', likeCount: 11},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, name: 'Hi'},
            {id: 2, name: 'How is your it-kamasutra?'},
            {id: 3, name: 'Yo'},
            {id: 4, name: 'Yo'},
            {id: 5, name: 'Yo'},
            {id: 6, name: 'Yo'},
        ]
    },
    sidebar: {}
}

export default state;