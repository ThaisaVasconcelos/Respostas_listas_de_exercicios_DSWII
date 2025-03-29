const util = require('util');

const inspectOpts = {
    colors: true, 
};

const colors = {
    INFO: '\x1b[34m',    // Azul
    WARNING: '\x1b[33m', // Amarelo
    ERROR: '\x1b[31m',   // Vermelho
};

// Para ativar as mensagens desta função, utilizar o comando
// $ set NODE_DEBUG=INFO
function info() {
    const debugInfo = util.debuglog('INFO');  // Ativa a depuração para 'INFO'
    debugInfo(`${colors.INFO}${util.inspect("Esta é uma mensagem de informação", inspectOpts)}`);
}

// Para ativar as mensagens desta função, utilizar o comando
// $ set NODE_DEBUG=WARNING
function warning() {
    const debugWarning = util.debuglog('WARNING');  // Ativa a depuração para 'WARNING'
    debugWarning(`${colors.WARNING}${util.inspect("Esta é uma mensagem de alerta", inspectOpts)}`);
}

// Para ativar as mensagens desta função, utilizar o comando
// $ set NODE_DEBUG=ERROR
function error() {
    const debugError = util.debuglog('ERROR');  // Ativa a depuração para 'ERROR'
    debugError(`${colors.ERROR}${util.inspect("Esta é uma mensagem de erro", inspectOpts)}$`);
}

module.exports = {
    info,
    warning,
    error
};
