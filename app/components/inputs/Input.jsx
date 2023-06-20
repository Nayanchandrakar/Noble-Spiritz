'use client';


const Input = ({
  id,
  label,
  type ,
  disabled, 
  register,
  required,
  errors,
  validation,
  errorName,
}) => {


  return (
    <div className="w-full relative flex flex-col gap-2">
      {errorName && errorName?.type && <span className="text-rose-600 text-xs absolute top-[-21px]">
      {errorName?.type == 'required' && errorName?.message}  
      {errorName?.type == 'maxLength' && errorName?.message}
      {errorName?.type == 'minLength' && errorName?.message}
      {errorName?.type == "matchPattern" && errorName?.message}  
      {errorName?.type == "pattern" && errorName?.message}  
      </span>}

      <input
        id={id}
        disabled={disabled}
        {...register(id , validation )}
        placeholder=" "
        type={type || 'text'}
        className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          pl-4
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
      />

      <label
        className={`
        text-md
        duration-150 
        transform 
        absolute
        -translate-y-3 
        top-5 
        z-2
        origin-[0] 
        left-4
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
        `}
      >
        {label}
      </label>
    </div>
   );
}
 
export default Input;