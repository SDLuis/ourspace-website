
export const Home = () => {
  return <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 fill-white' viewBox='0 0 330.242 330.242' xmlSpace='preserve'><path d='m324.442 129.811-41.321-33.677V42.275c0-6.065-4.935-11-11-11h-26c-6.065 0-11 4.935-11 11v14.737l-55.213-44.999c-3.994-3.254-9.258-5.047-14.822-5.047-5.542 0-10.781 1.782-14.753 5.019L5.8 129.81c-6.567 5.351-6.173 10.012-5.354 12.314.817 2.297 3.448 6.151 11.884 6.151h19.791v154.947c0 11.058 8.972 20.053 20 20.053h62.5c10.935 0 19.5-8.809 19.5-20.053v-63.541c0-5.446 5.005-10.405 10.5-10.405h42c5.238 0 9.5 4.668 9.5 10.405v63.541c0 10.87 9.388 20.053 20.5 20.053h61.5c11.028 0 20-8.996 20-20.053V148.275h19.791c8.436 0 11.066-3.854 11.884-6.151.819-2.302 1.213-6.963-5.354-12.313z' /></svg>
}

export const Message = () => {
  return <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 fill-white mt-[2px]' viewBox='0 0 458 458' xmlSpace='preserve'><path d='M428 41.534H30c-16.568 0-30 13.432-30 30v252c0 16.568 13.432 30 30 30h132.1l43.942 52.243a30 30 0 0 0 45.918.001l43.942-52.243H428c16.569 0 30-13.432 30-30v-252c0-16.57-13.431-30.001-30-30.001zM85.402 127h137c8.284 0 15 6.716 15 15s-6.716 15-15 15h-137c-8.284 0-15-6.716-15-15s6.716-15 15-15zM372 249H86c-8.284 0-15-6.716-15-15s6.716-15 15-15h286c8.284 0 15 6.716 15 15s-6.716 15-15 15z' /></svg>
}

export const Add = () => {
  return <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 fill-white' viewBox='0 0 512 512' xmlSpace='preserve'><path d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm149.3 277.3c0 11.8-9.5 21.3-21.3 21.3h-85.3V384c0 11.8-9.5 21.3-21.3 21.3h-42.7c-11.8 0-21.3-9.6-21.3-21.3v-85.3H128c-11.8 0-21.3-9.6-21.3-21.3v-42.7c0-11.8 9.5-21.3 21.3-21.3h85.3V128c0-11.8 9.5-21.3 21.3-21.3h42.7c11.8 0 21.3 9.6 21.3 21.3v85.3H384c11.8 0 21.3 9.6 21.3 21.3v42.7z' /></svg>
}

export const Like = ({ like }) => {
  return <svg xmlns='http://www.w3.org/2000/svg' className={`w-6 h-6 ml-1 ${like ? 'fill-[#e34326]' : 'fill-white'}`} viewBox='0 0 66.911 66.911' xmlSpace='preserve'><path d='M66.911 22.831c0-10.563-8.558-19.122-19.118-19.122-5.658 0-10.721 2.473-14.223 6.377l-.113.128c-3.5-3.98-8.618-6.505-14.334-6.505C8.561 3.709.005 12.268 0 22.831c0 5.834 2.629 11.059 6.758 14.565h-.007l27.104 25.806 26.308-25.806h-.012c4.128-3.506 6.76-8.727 6.76-14.565z' /></svg>
}

export const Send = () => {
  return <svg className='w-8 h-8 fill-white' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M28.7 14.23 4.43 2.1a2 2 0 0 0-2.78 2.31L5 16 1.65 27.59a2 2 0 0 0 1.89 2.53 1.92 1.92 0 0 0 .89-.22L28.7 17.77a2 2 0 0 0 0-3.54Z' data-name='Layer 10' /></svg>
}

export const Back = () => {
  return <svg className='stroke-white fill-white w-5 h-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 492 492' xmlSpace='preserve'><path d='M198.608 246.104 382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z' /></svg>
}
