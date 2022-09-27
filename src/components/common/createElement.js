class CreateElement {

    create(tagName, elementInner, className, insertTag) {
        const element = document.createElement(tagName);
        element.innerHTML = elementInner;
        element.className = className;
        if (insertTag) { insertTag.append(element); }
        return element;
    }

}
export default CreateElement;