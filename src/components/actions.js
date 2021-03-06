import axios from "./axios";

export async function receiveFriendsWannabes() {
    const { data } = await axios.get("/friends-wannabes");
    return {
        type: "RECEIVE_FRIENDS_WANNABES",
        users: data
    };
}

export async function acceptFriendRequest(id) {
    await axios.post(`/accept-friend-request/${id}`);
    return {
        type: "ACCEPT",
        id: id
    };
}

export async function unfriend(id) {
    await axios.post(`/end-friendship/${id}`);
    return {
        type: "UNFRIEND",
        id: id
    };
}

export async function chatMessages(msgs) {
    return {
        type: "CHAT_MESSAGES",
        messages: msgs
    };
}
export async function newMessage(msg) {
    return {
        type: "NEW_MESSAGE",
        message: msg
    };
}

export async function receiveWallMessages(id) {
    const { data } = await axios.get(`/wall-messages/${id}`);
    return {
        type: "RECEIVE_WALL_MESSAGES",
        messages: data
    };
}
export async function getFriendship(wallId) {
    const { data } = await axios.get(`/get-initial-status/${wallId}`);
    if (data.relationship == "false") {
        return {
            type: "RECEIVE_WALL_FRIENDSHIP",
            friendship: false
        };
    } else if (data.accepted == true) {
        return {
            type: "RECEIVE_WALL_FRIENDSHIP",
            friendship: true
        };
    } else if (data.accepted == false) {
        return {
            type: "RECEIVE_WALL_FRIENDSHIP",
            friendship: false
        };
    }
}
export async function addWallMessage(wallId, wallmsg) {
    await axios.post(`/addWallMessage/${wallId}`, {
        wallMessage: wallmsg
    });
    const { data } = await axios.get(`/newWallMessage/${wallId}`);
    return {
        type: "RECEIVE_NEW_WALL_MESSAGE",
        message: data
    };
}
