import "../src/assets/styles/style.css"

if ( !localStorage.getItem('keyboardCaps') ) { localStorage.setItem('keyboardCaps', 'caseUp') }
if ( !localStorage.getItem('lang') ) { localStorage.setItem('lang', 'EN') }


let keyLine1 = {
  keyNamesEN:           [ '`', '1', '2', '3', '4', '5', '6', '7', '8','9','0', '-','=', 'Backspase' ],
  keyNamesENShift:      [ '~', '!', '@', '#', '$', '%', '^', '&', '*','(',')', '_','+', 'Backspase' ],
  keyNamesENCaps:       [ '`', '1', '2', '3', '4', '5', '6', '7', '8','9','0', '-','=', 'Backspase' ],
  keyNamesENCapshift:   [ '~', '!', '@', '#', '$', '%', '^', '&', '*','(',')', '_','+', 'Backspase' ],

  keyNamesRU:           [ 'ё', '1', '2', '3', '4', '5', '6', '7', '8','9','0', '-','=', 'Backspase' ],
  keyNamesRUShift:      [ 'Ё', '!', '"', '№', ';', '%', ':', '?', '*','(',')', '_','+', 'Backspase' ],
  keyNamesRUCaps:       [ 'ё', '1', '2', '3', '4', '5', '6', '7', '8','9','0', '-','=', 'Backspase' ],
  keyNamesRUCapshift:   [ 'Ё', '!', '"', '№', ';', '%', ':', '?', '*','(',')', '_','+', 'Backspase' ],

  keyDatas:             [ '192', '49', '50', '51', '52', '53', '54', '55', '56','57','48', '109','61', '8' ],
  keyClass:             [ 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key','key','key', 'key','key', 'key key-backspase' ]
}

let keyLine2 = {
  keyNamesEN:           [ 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i','o','p', '[',']','\\', 'Del' ],
  keyNamesENShift:      [ 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I','O','P', '{','}','|',  'Del' ],
  keyNamesENCaps:       [ 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I','O','P', '{','}','|',  'Del' ],
  keyNamesENCapshift:   [ 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i','o','p', '[',']','\\', 'Del' ],

  keyNamesRU:           [ 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш','щ','з', 'х','ъ','\\', 'Del' ],
  keyNamesRUShift:      [ 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш','Щ','З', 'Х','Ъ','/' , 'Del' ],
  keyNamesRUCaps:       [ 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш','Щ','З', 'Х','Ъ','/' , 'Del' ],
  keyNamesRUCapshift:   [ 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш','щ','з', 'х','ъ','\\', 'Del' ],

  keyDatas:             [ '9', '81', '87', '69', '82', '84', '89', '85', '73','79','80', '160','221', '220', '46' ],
  keyClass:             [ 'key key-tab', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key','key','key', 'key','key','key', 'key key-delete' ]
} 

let keyLine3 = {
  keyNamesEN:           [ 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k','l',';', "'", 'Enter' ],
  keyNamesENShift:      [ 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K','L',':', `"`, 'Enter' ],
  keyNamesENCaps:       [ 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K','L',':', `"`, 'Enter' ],
  keyNamesENCapshift:   [ 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k','l',';', "'", 'Enter' ],

  keyNamesRU:           [ 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л','д','ж', "э", 'Enter' ],
  keyNamesRUShift:      [ 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л','Д','Ж', `Э`, 'Enter' ],
  keyNamesRUCaps:       [ 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л','Д','Ж', `Э`, 'Enter' ],
  keyNamesRUCapshift:   [ 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л','д','ж', "э", 'Enter' ],
  keyDatas:             [ '20', '65', '83', '68', '70', '71', '72', '74', '75','76', '59', '222', '13' ],
  keyClass:             [ 'key key-capslock', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key key-enter' ]
}

let keyLine4 = {
  keyNamesEN:           [ 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',','.','/', '&#9652', 'Shift' ],
  keyNamesENShift:      [ 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<','>','?', '&#9652', 'Shift' ],
  keyNamesENCaps:       [ 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<','>','?', '&#9652', 'Shift' ],
  keyNamesENCapshift:   [ 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',','.','/', '&#9652', 'Shift' ],

  keyNamesRU:           [ 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б','ю','.', '&#9652', 'Shift' ],
  keyNamesRUShift:      [ 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б','Ю',',', '&#9652', 'Shift' ],
  keyNamesRUCaps:       [ 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б','Ю',',', '&#9652', 'Shift' ],
  keyNamesRUCapshift:   [ 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б','ю','.', '&#9652', 'Shift' ],

  keyDatas:             [ '16', '90', '88', '67', '86', '66', '78', '77', '108', '190', '191', '38', '16' ],
  keyClass:             [ 'key key-shift', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key','key','key', 'key key-arrowup', 'key key-shift key-shift-left' ]
}

let keyLine5 = {
  keyNamesEN:           [ 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', '&#9656', 'Ctrl'],
  keyNamesENShift:      [ 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', '&#9656', 'Ctrl'],
  keyNamesENCaps:       [ 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', '&#9656', 'Ctrl'],
  keyNamesENCapshift:   [ 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', '&#9656', 'Ctrl'],

  keyNamesRU:           [ 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', '&#9656', 'Ctrl'],
  keyNamesRUShift:      [ 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', '&#9656', 'Ctrl'],
  keyNamesRUCaps:       [ 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', '&#9656', 'Ctrl'],
  keyNamesRUCapshift:   [ 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', '&#9656', 'Ctrl'],

  keyDatas:             [ '17', '91', '18', '32', '18', '37', '40', '39', '17'],
  keyClass:             [ 'key key-ctrl', 'key key-win', 'key key-alt', 'key key-spase', 'key key-alt', 'key key-arrowleft', 'key key-arraydown', 'key key-arrowright', 'key key-ctrl' ]
}

function component() {
  const element = document.createElement('div');
  element.classList.add("panel");
  const button = document.createElement('button')
  button.className = 'buttonDark'
  button.innerHTML = 'Dark mode'
  element.appendChild(button)
  return element;
}

function createTextarea( name , container, classname ) {
  const element = document.createElement(name)
  element.className = classname
  element.id = 'textarea';
  element.rows = '5';
  element.cols = '50';
  container.appendChild(element)
  return element
}

function createElement( name , container, classname, inner = '') {
  const element = document.createElement(name)
  element.className = classname
  element.innerHTML = inner
  container.appendChild(element) 
  return element
}

function createKeysLine( lineObject , container, classname) {
  const containerLineKeys       = document.createElement('div') ;
  containerLineKeys.className   = classname ;
  container.appendChild( containerLineKeys ) ;

  lineObject.keyNamesEN.forEach( function( element, index) {
    const keyelement = document.createElement('div') 
    keyelement.setAttribute('data-key', lineObject.keyDatas[index])  
    keyelement.className = lineObject.keyClass[index];
    containerLineKeys.appendChild( keyelement );
    let KeyEngContainerClassName    = 'en hiden' 
    let KeyRuContainerClassName     = 'ru' 

    if ( localStorage.getItem('lang') == 'EN') {
      KeyEngContainerClassName      = 'en' 
      KeyRuContainerClassName       = 'ru hiden'
    }
 
    const KeyEngContainer = createElement( 'span' , keyelement, KeyEngContainerClassName );
    const KeyRuContainer  = createElement( 'span' , keyelement, KeyRuContainerClassName );

    createElement( 'kbd' , KeyEngContainer, 'caseUp',         lineObject.keyNamesEN[index]  );
    createElement( 'kbd' , KeyEngContainer, 'shift hiden',    lineObject.keyNamesENShift[index] );
    createElement( 'kbd' , KeyEngContainer, 'caps hiden',     lineObject.keyNamesENCaps[index] );
    createElement( 'kbd' , KeyEngContainer, 'capshift hiden', lineObject.keyNamesENCapshift[index] );

    createElement( 'kbd' , KeyRuContainer, 'caseUp',         lineObject.keyNamesRU[index]  );
    createElement( 'kbd' , KeyRuContainer, 'shift hiden',    lineObject.keyNamesRUShift[index] );
    createElement( 'kbd' , KeyRuContainer, 'caps hiden',     lineObject.keyNamesRUCaps[index] );
    createElement( 'kbd' , KeyRuContainer, 'capshift hiden', lineObject.keyNamesRUCapshift[index] );

  });
}

function hideKeys( nameKeys ) {
  nameKeys.forEach( key => {
    key.classList.add('hiden')
  })
}

function displayKeys( nameKeys ) {
  nameKeys.forEach( key => {
    key.classList.remove('hiden')
  })
}

const panel             = document.body.appendChild(component());
const centralizer       = createElement( 'div' , document.body, 'centralizer' )
const textarea          = createTextarea( 'textarea', centralizer, "body-textarea textarea");
const containerKeyboard = createElement( 'div', centralizer, "container-keyboard");

createKeysLine( keyLine1 , containerKeyboard, "keys");
createKeysLine( keyLine2 , containerKeyboard, "keys");
createKeysLine( keyLine3 , containerKeyboard, "keys");
createKeysLine( keyLine4 , containerKeyboard, "keys");
createKeysLine( keyLine5 , containerKeyboard, "keys");

createElement( 'p', centralizer, "description", "Клавиатура создана в операционной системе Windows");
createElement( 'p', centralizer, "language", "Для переключения языка комбинация: левыe ctrl + alt" );

const buttonDark = document.querySelector('.buttonDark');

buttonDark.addEventListener('click', (event) => {
  const html = document.querySelector('html')
  if ( html.classList.contains('dark') ) {
    html.classList.remove('dark');
    event.target.innerHTML = 'Dark mode';
  } else {
    html.classList.add('dark');
    event.target.innerHTML = 'Light mode';
  }
})

const Shifts        = document.querySelectorAll('.key-shift');
const keys          = document.querySelectorAll('.key');
const caseUps       = document.querySelectorAll('.caseUp');
const KeysShifts    = document.querySelectorAll('.shift');
const KeysCaps      = document.querySelectorAll('.caps');
const KeysCapShifts = document.querySelectorAll('.capshift');

const containerEN   = document.querySelectorAll('.en');
const containerRU   = document.querySelectorAll('.ru');

const keyCapsLock   = document.querySelector('.key-capslock');

function whiteTextKeyValue(keyCode) {
  const key       = document.querySelector(`div[data-key="${keyCode}"]`);
  if ( !( key == null) ) {
    const keySpans  = key.childNodes
    key.classList.add( 'active' )
    keySpans.forEach( keySpan => {
      
      if ( !keySpan.classList.contains('hiden') ) {
        const keyKbds = keySpan.childNodes
        keyKbds.forEach( keyKbd => {
          if ( !keyKbd.classList.contains('hiden') ) {
               
            writeToTextArea( keyKbd.innerHTML);
            
          }
        })
      }
    })
  }
}

function writeToTextArea( text ) {
  let selectionStart = textarea.selectionStart;
  let selectionEnd = textarea.selectionEnd;

  switch(text) {
    case "Backspase": { 
      if ( textarea.selectionEnd > 0) {
        textarea.value = textarea.value.slice(0, textarea.selectionStart - 1) + textarea.value.slice(textarea.selectionEnd);
        textarea.selectionEnd = selectionEnd - 1
        textarea.selectionStart = selectionStart - 1
      }
      break; 
    }
    case "Del": { 
      textarea.setRangeText('', textarea.selectionStart , textarea.selectionEnd + 1, 'preserve');
      textarea.selectionEnd = selectionEnd - 1
      textarea.selectionStart = selectionEnd
      break; 
    }  

    case "Tab": { 
      text = "  ";
      textarea.setRangeText( text, textarea.selectionStart, textarea.selectionEnd, 'end' );
    }  
    case "Enter": {
      text = "\n";
      textarea.setRangeText( text, textarea.selectionStart, textarea.selectionEnd, 'end' );
    }
    case "CapsLock": { break; }
    case "Shift": { break; }
    case "Ctrl":  { break; }
    case "Win":   { break; }      
    case "Alt":   { break; }     
    default: {
      const startPosition = textarea.selectionStart;
      const endPosition   = textarea.selectionEnd;
      textarea.focus();
      textarea.setRangeText( text, textarea.selectionStart, textarea.selectionEnd, 'end' );
    }
  }
}

keys.forEach( key => {
  key.addEventListener( 'mousedown', (event) => {
    event.preventDefault()
    let parrent = event.target.closest("div");
    let keyCode = parrent.getAttribute("data-key");
    whiteTextKeyValue(keyCode); 
  })
  key.addEventListener( 'mouseup', (event) => {
    event.preventDefault()
    event.target.closest("div").classList.remove( 'active')
  })
})

window.addEventListener('keyup', (event) => {
  
  if ( (event.code == 'CapsLock') ) {
    
  }

  else if (event.code == 'ShiftLeft') {
    shiftUp() 
    const key       = document.querySelector(`div[data-key="${event.keyCode}"]`);
    key.classList.remove( 'active' ) 
  }

  else {
    const key       = document.querySelector(`div[data-key="${event.keyCode}"]`);
    key.classList.remove( 'active' ) 
  }
});

window.addEventListener('keydown', (event) => {
  event.preventDefault()
  if (event.ctrlKey && event.altKey) {
    if ( localStorage.getItem('lang') == 'EN' ){
      hideKeys( containerEN )
      displayKeys( containerRU ) 
      localStorage.setItem('lang', 'RU')
    }
    else {
      hideKeys( containerRU )
      displayKeys( containerEN ) 
      localStorage.setItem('lang', 'EN')
    }
  }
  if (event.code == 'CapsLock' ) {
    CapsLockKey()  
    return
  }

  if (event.code == 'ShiftLeft' ) {
    shiftDown()     
  }
  
  whiteTextKeyValue(event.keyCode);
})

keyCapsLock.addEventListener( 'click', (event) => {
  event.preventDefault()
  CapsLockKey()
})

function CapsLockKey() {
  if ( localStorage.getItem('keyboardCaps') == 'caseUp' ) {
    hideKeys( caseUps )
    displayKeys( KeysCaps ) 
    keyCapsLock.classList.add( 'active' )
    localStorage.setItem('keyboardCaps', 'caps')
  }
  else {
    displayKeys( caseUps )
    hideKeys( KeysCaps )
    keyCapsLock.classList.remove( 'active' )
    localStorage.setItem('keyboardCaps', 'caseUp')
  }
}

function shiftDown() {
  if ( localStorage.getItem('keyboardCaps') == 'caseUp' ) {
    hideKeys( caseUps )
    displayKeys( KeysShifts )
  }
  else {
    hideKeys( KeysCaps )
    displayKeys( KeysCapShifts )
  }
}

function shiftUp() {
  if ( localStorage.getItem('keyboardCaps') == 'caseUp' ) {
    displayKeys( caseUps )  
    hideKeys( KeysShifts )   
  }
  else {
    displayKeys( KeysCaps )  
    hideKeys( KeysCapShifts )      
  }
}


Shifts.forEach(Shift => {
  Shift.addEventListener( "mousedown", event => {
    shiftDown() 
  })

  Shift.addEventListener( "mouseup", event => {
    shiftUp()
  })
})












console.log("Максимальный балл за задание: 110\nминимальный набор:\nреализована генерация DOM-элементов и body в index.html пустой изначально (может находится только тег script): +20\nнажатие на кнопку на физической клавиатуре подсвечивает кнопку на виртуальной (проверять следует нажатие цифр, букв, знаков препинания, backspace, del (если она присутствует), enter, shift, alt, ctrl, tab, caps lock, space, стрелки вниз-вверх-влево-вправо): +5\n(не всё)\nстандартный набор:\nесть переключение между русским и английским языком (сочетание клавиш для переключения языка должно быть указано на странице с клавиатурой), а также сохранение выбранного языка: +15\nклики мышкой по кнопкам на виртуальной клавиатуре или нажатие на кнопки физической клавиатуры, выводят символы в инпут (textarea): +15\nдополнительный набор:\nреализована анимация нажатия на кнопку: +15\nтехнические требования:\nиспользование в коде фишек стандарта ES6 и выше (classes, деструктуризация и т.д.): +15\nиспользование eslint: +10\nтребования к репозиторию, коммитам и PR выполнены: +10\nИтоговая оценка: 105")