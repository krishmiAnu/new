/**
 * Created by USER on 09/11/2017.
 */

var enemyList=new Array();
var highlightedList=new Array();
var clickDiv;

function searchIsEnemy(parentId) {
    for(var i in enemyList){
        if (enemyList[i]=="#"+parentId){
            return true;
        }
    }
}

