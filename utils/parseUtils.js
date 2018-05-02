export function formatToTree(data) {
    const TREE = {};

    TREE.parent = data.find(item => !item.parentId);
    TREE.parent.children = [];

    data.forEach(item => {
        if (item.parentId === TREE.parent.id) {
            TREE.parent.children.push(appendChildren(item, data));
        }
    });
    return TREE;
}


export function appendChildren(parent, data) {
    data.forEach(item => {
        if (!parent.children) {
            parent.children = [];
        }
        if (item.parentId === parent.id) {
            parent.children.push(appendChildren(item, data));
        }
    });
    return parent;
}