import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://ww.namu.la/s/bf2527dfd9717aea7f08232f93199df34d308181c08223628b862f90b4d77593479ba3d8b7fe6b1e781c731472c3679113e43dd1c93b608ca5c1f069386f24f7fa9f2a9c486868179ca1d2fede93d2d75ae07314399a5b38c823e347210448c0e3b9021cbbe04c28bc68134aeb680168',
    rating: 4,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://w.namu.la/s/766a3edbb5e38f9793933d95dbb6009f1081bf5f4a12035cef23e9301c97ecaa3db9226ea85f643566efd79969e4bec21e5fb33a56296044a9cc6f56f39c8b3c5589fd3254ec8edcd6f3198880be82a78f872f81b38f55002ca7737e85f5620a21865e3906458fc4b0e4bc0738af3f77',
    rating: 3,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://w.namu.la/s/c49c4857c17ea9dab1bc88d7909253128567f7610d452ec2d86a36054ae7a8afaffb2834c86bdc5837e87e824e0c12df00e7228bc0e34e5af763b17ce1b516e33a395c6580893cb74a36352d12ea76629915dcb4183f3e0cfa2fdc4bb980753b9a10d774d91eacc606df9b4e8aed1d01',
    rating: 2,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://ww.namu.la/s/33c9509d550db600898d73c2583211037408f060b2d4f8748fb39d34c8159a2e9867520fb83885e0dbe2ab3884f98c12ed4d9892ea11f54802ab2915170378814716ead45eb64603a685dba24eff8dd39f3217dba80f19547d3f7770e8a0b6d2',
    rating: 1,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
