import { AuthForm } from "../../../widgets/authForm/ui"
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { DevTool } from "@hookform/devtools"
import { Input } from "../../../shared/ui/input"
import { Button } from "../../../shared/ui/button"

interface LoginProps {
  email: string,
  password: string
}

export default function Login() {
  const go = useNavigate()

  const {
    control,
    handleSubmit,
    formState: {
      errors,
      isValid
    }
  } = useForm<LoginProps>({ mode: "onChange", defaultValues: { email: '', password: '' } })

  const onSubmit = (data: LoginProps) => {
    alert(`ℹ️ Form Submitted: ${JSON.stringify(data)}`)
  }


  return (
    <AuthForm label={"GSM.GG 로그인"}>
      <DevTool control={control} />
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <Controller
            name="email"
            control={control}
            rules={{
              required: "이메일을 입력해주세요.",
              pattern: {
                value:
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // 이메일 형식 정규식
                message: "유효한 이메일 주소를 입력해주세요.",
              },
            }}
            render={({ field }) => <Input label="이메일" type="email" {...field} error={errors.email?.message} />}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message: "8자 이상으로 입력해주세요."
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d).*$/,
                message: "영문, 숫자를 포함한 비밀번호를 입력해주세요."
              }
            }}
            render={({ field }) => <Input label="비밀번호" type="password" {...field} error={errors.password?.message} />}
          />
        </div>
        <Button variant="blue" label="로그인" isActive={isValid} />
        <a className="text-primary-300 font-semibold cursor-pointer" onClick={() => go('/signup')}>아직 계정이 없으시다먼 [회원가입]</a>
      </form>
    </AuthForm>
  )
}

