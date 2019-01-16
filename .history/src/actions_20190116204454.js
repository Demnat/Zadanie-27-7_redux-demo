import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// {
//     type: ADD_COMMENT;
//     id: uuid.v4();
//     text: 'tekst komentarza'
// }

function addComment(text) {
    return {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text
    }
}

const boundAddComment = text => dispatch(addComment(text));

// {
//     type: REMOVE_COMMENT;
//     id: 20 
// }

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

const boundRemoveComment = id => dispatch(removeComment(id));

// {
//     type: EDIT_COMMENT;
//     id: 20;
//     text: 'wyedytowany tekst komentarza'
// }

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

const boundEditComment = (id, text) => dispatch(editComment(id,text));

// {
//     type: THUMB_UP_COMMENT;
//     id: 20;
//     amount: 3
// }

function upComment(id, amount) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        amount
    }
}

const boundUpComment = (id, amount) => dispatch(upComment(id,amount));


// {
//     type: THUMB_DOWN_COMMENT;
//     id: 25;
//     amount: 0
// }

function downComment(id, amount) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        amount
    }
}

const boundDownComment = (id, amount) => dispatch(downComment(id,amount));

boundAddComment('nowy komentarz!');
boundRemoveComment(0000);
boundEditComment(0001,'wyedytowanytext');
boundUpComment(0001,25);
boundDownComment(0003,2);