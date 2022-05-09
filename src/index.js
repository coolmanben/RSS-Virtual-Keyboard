import "../src/assets/styles/style.css"

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
  const containerLineKeys = document.createElement('div') ;
  containerLineKeys.className = classname ;
  container.appendChild( containerLineKeys ) ;

  lineObject.keyNamesEN.forEach( function( element, index) {
    const keyelement = document.createElement('div') 
    keyelement.setAttribute('data-key', lineObject.keyDatas[index])  
    keyelement.className = lineObject.keyClass[index];
    containerLineKeys.appendChild( keyelement );

    const KeyEngContainer = createElement( 'span' , keyelement, 'en' );

    createElement( 'kbd' , KeyEngContainer, 'caseUp',         lineObject.keyNamesEN[index]  );
    createElement( 'kbd' , KeyEngContainer, 'shift hiden',    lineObject.keyNamesENShift[index] );
    createElement( 'kbd' , KeyEngContainer, 'caps hiden',     lineObject.keyNamesENCaps[index] );
    createElement( 'kbd' , KeyEngContainer, 'capshift hiden', lineObject.keyNamesENCapshift[index] );


    const KeyRuContainer = createElement( 'span' , keyelement, 'ru hiden' );

    createElement( 'kbd' , KeyRuContainer, 'caseUp',         lineObject.keyNamesRU[index]  );
    createElement( 'kbd' , KeyRuContainer, 'shift hiden',    lineObject.keyNamesRUShift[index] );
    createElement( 'kbd' , KeyRuContainer, 'caps hiden',     lineObject.keyNamesRUCaps[index] );
    createElement( 'kbd' , KeyRuContainer, 'capshift hiden', lineObject.keyNamesRUCapshift[index] );

  });
}

let keyLine1 = {
  keyNamesEN:           [ '`', '1', '2', '3', '4', '5', '6', '7', '8','9','0', '-','=', 'Backspase' ],
  keyNamesENShift:      [ '~', '!', '@', '#', '$', '%', '^', '&', '*','(',')', '_','+', 'Backspase' ],
  keyNamesENCaps:       [ '`', '1', '2', '3', '4', '5', '6', '7', '8','9','0', '-','=', 'Backspase' ],
  keyNamesENCapshift:   [ '~', '!', '@', '#', '$', '%', '^', '&', '*','(',')', '_','+', 'Backspase' ],

  keyNamesRU:           [ 'ё', '1', '2', '3', '4', '5', '6', '7', '8','9','0', '-','=', 'Backspase' ],
  keyNamesRUShift:      [ 'Ё', '!', '"', '№', ';', '%', ':', '?', '*','(',')', '_','+', 'Backspase' ],
  keyNamesRUCaps:       [ 'Ё', '!', '"', '№', ';', '%', ':', '?', '*','(',')', '_','+', 'Backspase' ],
  keyNamesRUCapshift:   [ 'Ё', '!', '"', '№', ';', '%', ':', '?', '*','(',')', '_','+', 'Backspase' ],

  keyDatas:             [ '192', '49', '50', '51', '52', '53', '54', '55', '56','57','48', '109','61', '8' ],
  keyClass:             [ 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key','key','key', 'key','key', 'key key-backspase' ]
}

let keyLine2 = {
  keyNamesEN:           [ 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i','o','p', '[',']','\\', 'Del' ],
  keyNamesENShift:      [ 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I','O','P', '{','}','|', 'Del' ],
  keyNamesENCaps:       [ 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I','O','P', '{','}','|', 'Del' ],
  keyNamesENCapshift:   [ 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i','o','p', '[',']','\\', 'Del' ],

  keyNamesRU:           [ 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш','щ','з', 'х','ъ','\\', 'Del' ],
  keyNamesRUShift:      [ 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш','Щ','З', 'Х','Ъ','/', 'Del' ],
  keyNamesRUCaps:       [ 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш','Щ','З', 'Х','Ъ','/', 'Del' ],
  keyNamesRUCapshift:   [ 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш','щ','з', 'х','ъ','\\', 'Del' ],

  keyDatas:             [ '9', '81', '87', '69', '82', '84', '89', '85', '73','79','80', '160','221', '220', '8' ],
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
  keyDatas:             [ '20', '65', '83', '68', '70', '71', '72', '74', '75','76', '59', '222', '8' ],
  keyClass:             [ 'key key-capslock', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key key-enter' ]
}

let keyLine4 = {
  keyNamesEN:           [ 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',','.','/', ' ', 'Shift' ],
  keyNamesENShift:      [ 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<','>','?', ' ', 'Shift' ],
  keyNamesENCaps:       [ 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<','>','?', ' ', 'Shift' ],
  keyNamesENCapshift:   [ 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',','.','/', ' ', 'Shift' ],

  keyNamesRU:           [ 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б','ю','.', ' ', 'Shift' ],
  keyNamesRUShift:      [ 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б','Ю',',', ' ', 'Shift' ],
  keyNamesRUCaps:       [ 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б','Ю',',', ' ', 'Shift' ],
  keyNamesRUCapshift:   [ 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б','ю','.', ' ', 'Shift' ],

  keyDatas:             [ '16', '49', '50', '51', '52', '53', '54', '55', '56','57','48', '109','61', '8' ],
  keyClass:             [ 'key key-shift', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key','key','key', 'key', 'key key-shift key-shift-left' ]
}

let keyLine5 = {
  keyNamesEN:           [ 'Ctrl', 'Win', 'Alt', '', 'Alt', ' ', ' ', ' ', 'Ctrl'],
  keyNamesENShift:      [ 'Ctrl', 'Win', 'Alt', '', 'Alt', ' ', ' ', ' ', 'Ctrl'],
  keyNamesENCaps:       [ 'Ctrl', 'Win', 'Alt', '', 'Alt', ' ', ' ', ' ', 'Ctrl'],
  keyNamesENCapshift:   [ 'Ctrl', 'Win', 'Alt', '', 'Alt', ' ', ' ', ' ', 'Ctrl'],

  keyNamesRU:           [ 'Ctrl', 'Win', 'Alt', '', 'Alt', ' ', ' ', ' ', 'Ctrl'],
  keyNamesRUShift:      [ 'Ctrl', 'Win', 'Alt', '', 'Alt', ' ', ' ', ' ', 'Ctrl'],
  keyNamesRUCaps:       [ 'Ctrl', 'Win', 'Alt', '', 'Alt', ' ', ' ', ' ', 'Ctrl'],
  keyNamesRUCapshift:   [ 'Ctrl', 'Win', 'Alt', '', 'Alt', ' ', ' ', ' ', 'Ctrl'],

  keyDatas:             [ '17', '91', '18', '32', '18', '37', '40', '39', '17'],
  keyClass:             [ 'key key-ctrl', 'key key-win', 'key key-alt', 'key key-spase', 'key key-alt', 'key key-arrowleft', 'key key-arraydown', 'key key-arrowright', 'key key-ctrl' ]
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

const Shifts = document.querySelectorAll('.key-shift');

const keys       = document.querySelectorAll('.key');

const caseUps       = document.querySelectorAll('.caseUp');
const KeysShifts    = document.querySelectorAll('.shift');
const KeysCaps      = document.querySelectorAll('.caps');
const KeysCapShifts = document.querySelectorAll('.capshift');

const text_area     = document.getElementById( 'textarea' );

function whiteText( event ) {
  whiteTextKeyValue(event.keyCode);
}

function whiteTextKeyValue(keyCode) {
  const key       = document.querySelector(`div[data-key="${keyCode}"]`);
  const keySpans  = key.childNodes
  keySpans.forEach( keySpan => {
    if ( !keySpan.classList.contains('hiden') )  {
      const keyKbds = keySpan.childNodes
      keyKbds.forEach( keyKbd => {
        if ( !keyKbd.classList.contains('hiden') ) {
          writeToTextArea( keyKbd.innerHTML)
        }
      })
    }
  })
}

function writeToTextArea( text ) {

  const startPosition = text_area.selectionStart;
  const endPosition   = text_area.selectionEnd;
  text_area.setRangeText( text, text_area.selectionStart, text_area.selectionEnd, 'end' );

}

keys.forEach( key => {
  key.addEventListener( 'click', (event) => {
    let parrent = event.target.closest("div");
    let keyCode = parrent.getAttribute("data-key");
    whiteTextKeyValue(keyCode); 
  })
})

window.addEventListener('keydown', whiteText );


if ( !localStorage.getItem('keyboardCaps') ) { localStorage.setItem('keyboardCaps', 'caseUp') }

const keyCapsLock   = document.querySelector('.key-capslock');

keyCapsLock.addEventListener( 'click', (event) => {
  if ( localStorage.getItem('keyboardCaps') == 'caseUp' ) {
    hideKeys( caseUps )
    displayKeys( KeysCaps ) 
    localStorage.setItem('keyboardCaps', 'caps')
  }
  else {
    displayKeys( caseUps )
    hideKeys( KeysCaps )
    localStorage.setItem('keyboardCaps', 'caseUp')
  }
})

Shifts.forEach(Shift => {
  Shift.addEventListener( "mousedown", event => {
    if ( localStorage.getItem('keyboardCaps') == 'caseUp' ) {
      hideKeys( caseUps )
      displayKeys( KeysShifts )
    }
    else {
      hideKeys( KeysCaps )
      displayKeys( KeysCapShifts )
    }
  })
  Shift.addEventListener( "mouseup", event => {
    if ( localStorage.getItem('keyboardCaps') == 'caseUp' ) {
      displayKeys( caseUps )  
      hideKeys( KeysShifts )   
    }
    else {
      displayKeys( KeysCaps )  
      hideKeys( KeysCapShifts )      
    }
  })
})


