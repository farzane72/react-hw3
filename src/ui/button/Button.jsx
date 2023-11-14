function Button(props) {
    
    const {classMore='',children,callback,variant}=props
    const variants = {
        contained : "text-blue-500",
        outlined : "bg-blue-500 text-white px-4 py-1 rounded-md",
        
    }

   
    
    return (
       
            <button className={`${classMore} ${ variants[variant]}`} onClick={()=>callback()}>
                {children}
            </button>
       
    )
}

export default Button
