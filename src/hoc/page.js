import React from "react";
import Header from "../pages/Header";

// export default title => {
//   return WrappedComponent => {
//     class PageHoc extends Component {
//       render() {
//         console.log('title >>>', title);
//         return (
//           <React.Fragment>
//             <Header title={title} />
//             <WrappedComponent />
//           </React.Fragment>
//         );
//       }
//     }
//     return PageHoc;
//   };
// };

export default title => {
  return WrappedComponent => {
    const WithTitle = ({ children, ...props }) => {
      return (
        <React.Fragment>
          <Header title={title} />
          <WrappedComponent />
        </React.Fragment>
      );
    };
    return WithTitle;
  };
};
