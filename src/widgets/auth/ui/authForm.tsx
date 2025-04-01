export const AuthForm = ({ children, label }: any) => {
  return (
    <div className="flex flex-col bg-white w-[30rem] rounded-2xl p-5">
      <h1 className="font-bold text-2xl text-center">{label}</h1>
      {children}
    </div>
  )
}


