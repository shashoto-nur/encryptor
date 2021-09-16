
var console = {
    log: function(msg: string) { alert(msg); }
};

const logError = (message: string) =>
{
    console.log(message);
    alert('Operation failed! Please try again...');
}

export default logError;