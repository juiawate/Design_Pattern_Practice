
function Model() {

}

Model.prototype.set = function (propName, propVal) {
    this[propName] = propVal;
};

function View(updateFn) {

    this.update = updateFn;
}


function Controller(model, view) {

}


var candidatesModel = new Model();
candidatesModel.set('candidates', [{name: 'jui'}, {name: 'anu'}]);
