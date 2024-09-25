// import React from 'react';
//
// const IntroSection = () => {
//   return (
//     <section>
//       <h1 className="centered">Dinar Khafizov</h1>
//       <h3 className="centered" style={{color: '#666'}}>Пытаюсь в frontent и пытюсь набить руку создавая всякие проекты которые уже реализованны в этой вселенной</h3>
//     </section>
//   );
// };
//
// export default IntroSection;


import React from 'react';

const IntroSection = () => {
  return React.createElement(
    'section',
    null,
    [React.createElement('h1', {className: 'centered', key: 1}, 'Dinar Khafizov'),
      React.createElement('h3',
        { className:'centered', style:{color: '#666' }, key: 2 }, 'Пытаюсь в frontent и пытюсь набить руку создавая всякие проекты которые уже реализованны в этой вселенной'),
])
};

export default IntroSection;