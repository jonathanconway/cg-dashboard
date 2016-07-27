
const selSidenav = '.test-nav-primary';
const selSidenavActive = '.test-active';

function children(...classes) {
  return classes.reduce(function(finished, currClass) {
    return finished + ' ' + currClass;
  }, '');
}

const nav = {
  selectAnyActive() {
    var sel = children(selSidenav, selSidenavActive);
    return sel;
  }
};

module.exports = nav;
