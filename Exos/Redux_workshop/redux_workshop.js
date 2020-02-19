//declarations substantielles_________________

const stateButton = document.getElementById('stateChange');
const parag = document.getElementsByTagName('p');
    
const initialState = {
    doing : "LISTENING",
    message: "(...)"
}

const greetAct = {
    type: "GREET_ONCLICK",
    doing: "GREETING",
    message: 'Hello World !'
}

//declarations essentielles___________________

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "GREET_ONCLICK" : 
            return {
                ...state,
                doing : action.doing,
                message: action.message
            }
        default :
        console.log("reducer default acted")
            return state;
    }
}

const render = () => {
    parag[0].innerHTML= store.getState().message;
    parag[1].innerHTML= store.getState().doing.toLowerCase();
}

//initialisations___________________

const store = Redux.createStore(reducer);

render();

const greet = (toDo) => {
    store.dispatch(toDo);
    //store.subscribe();
    //parag[0].innerhtml = store.getState.message;
}

//actions______________

store.subscribe(render)

stateButton.addEventListener('click', () => greet( greetAct ));
