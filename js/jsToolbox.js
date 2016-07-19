/**
 * Created by ethan on 3/31/15.
 * jsToolbox is a collection of shortcuts
 */


Element.prototype.addClassName = function(classString) {
    var oldClassList = this.className.split(" ");
    if (oldClassList.indexOf(classString) === -1) {
        // The class is not yet applied
        oldClassList.push(classString);
    }
    this.className = oldClassList.join(" ");
    return true;
};

Element.prototype.removeClassName = function(classString) {
    var oldClassList = this.className.split(" ");
    var newClassList = oldClassList.filter(function(i){return (i !== classString)});
    this.className = newClassList.join(" ");
    return true
};

HTMLFormElement.prototype.resetErrorState = function() {
    var errorObjects = this.getElementsByClassName("error");
    var i;
    for (i=0; i < errorObjects.length; i++) {
        var item = errorObjects[i];
        item.removeClassName("error");
    }
};

function getLabels(inputElement, getAll) {
    if (typeof(getAll) === 'undefined' || !getAll) {
        return document.querySelector('label[for="' + inputElement.id + '"]');
    }
    else {
        return document.querySelectorAll('label[for="' + inputElement.id + '"]');
    }
};

function FailCounter() {
    this._nodes = {};
    this._keys = [];
    return this;
}

FailCounter.prototype.initNode = function (nodeName) {
    if (!this._nodes.hasOwnProperty(nodeName)) {
        this._nodes[nodeName] = 0;
        this._keys.push(nodeName);
    }
};

FailCounter.prototype.increment = function (nodeName) {
    this.initNode(nodeName);
    this._nodes[nodeName]++;
};

FailCounter.prototype.nodes = function () {
    return this._keys;
}

FailCounter.prototype.getValue = function (nodeName) {
    var result;
    if (this._keys.indexOf(nodeName) === -1) {
        result = undefined;
    }
    else {
        result = this._nodes[nodeName];
    }
    return result;
}
