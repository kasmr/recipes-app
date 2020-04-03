import React from 'react';
import SkeletonRecipe from './SkeletonRecipe';

const SkeletonGroup = () => {
  return (
    <div className='main-container'>
      <SkeletonRecipe />
      <SkeletonRecipe />
      <SkeletonRecipe />
      <SkeletonRecipe />
      <SkeletonRecipe />
      <SkeletonRecipe />
      <SkeletonRecipe />
      <SkeletonRecipe />
      <SkeletonRecipe />
    </div>
  );
};

export default SkeletonGroup;
