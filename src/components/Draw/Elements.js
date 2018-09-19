import { getElementComponent } from "./utils";

const Elements = ({ elements, dragEvents, type }) => {
  return elements.map((element, index) => {
    return getElementComponent(element, index, dragEvents, type);
  });
};

export default Elements;
