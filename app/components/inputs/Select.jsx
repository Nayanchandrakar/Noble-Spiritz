'use client'

const Select = ({
    id,
    label,
    options,
    disabled, 
    register,
    required,
    errors,
  }) => {
    return (
      <div className="w-full  flex flex-col gap-1">
        
        {label && <label
          className={`
          text-sm
          font-thin
          transition-all
          duration-150
          ${errors[id] ? 'text-rose-500' : 'text-gray-800'}
          `}
        >
          {label}
        </label>}

       <select 
       id={id}
       disabled={disabled}
       className={`
       disabled:opacity-70
       w-full
       p-4
       rounded-lg
       border-2
       text-black
       disabled:cursor-not-allowed
       ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
       ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
       `}
       {...register(id, { required })}
       >
       {options?.map((elem,index) => {
        return <option 
        className="text-black" 
        key={index + 23423423} 
        value={elem}>
            {elem}
        </option>
       })} 
      </select>

      </div>
     );
  }
   
  export default Select;