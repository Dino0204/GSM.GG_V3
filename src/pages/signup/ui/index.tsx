import { AuthForm } from "../../../widgets/authForm/ui"
import { useForm, Controller } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { Input } from "../../../shared/ui/input"
import { Button } from "../../../shared/ui/button"
import { useNavigate } from "react-router-dom"

interface SignUpProps {
  name: string,
  tag: string,
  email: string,
  password: string
}

export default function SignUp() {
  const go = useNavigate()

  const {
    control,
    handleSubmit,
    formState: {
      errors,
      isDirty,
      isValid
    }
  } = useForm<SignUpProps>({
    mode: "onChange",
    defaultValues: {
      name: '',
      tag: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = (data: SignUpProps) => {
    alert(`ℹ️ Form Submitted: ${JSON.stringify(data)}`)
  }

  return (
    <AuthForm label={"GSM.GG 회원가입"}>
      <DevTool control={control} />
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <Controller
              name="name"
              control={control}
              rules={{
                required: "소환사 이름을 입력해주세요."
              }}
              render={({ field }) => <Input label="소환사 이름" type="text" {...field} error={errors.name?.message} />}
            />
            <Controller
              name="tag"
              control={control}
              rules={{
                required: "태그를 입력해주세요."
              }}
              render={({ field }) => <Input label="태그" type="text" placeHolder="#" {...field} error={errors.tag?.message} />}
            />
          </div>
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
        <Button variant="primary" label="회원가입" isActive={isDirty && isValid} />
        <a className="text-primary-300 font-semibold cursor-pointer" onClick={() => go('/login')}>이미 계정이 있으시다먼 [로그인]</a>
      </form>
    </AuthForm>
  )
}

