import { useForm } from "react-hook-form";

export default function ReactHookFormExamplePage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    function onSubmitForm(fomrData) {
        console.log(fomrData);

        reset();
    }

    return (
        <div>
            <h1>React Hook Form Page</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label>Email</label>
                    <input
                        {...register("email", {
                            required: true,
                        })}
                        name="email"
                        type="email"
                    />
                    {errors.email && errors.email.type === "required" ? (
                        <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>Email is required</p>
                    ) : null}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        {...register("password", {
                            required: true,
                            minLength: 8,
                        })}
                        name="password"
                        type="password"
                    />
                    {errors.password && errors.password.type === "required" ? (
                        <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>Password is required</p>
                    ) : null}
                    {errors.password && errors.password.type === "minLength" ? (
                        <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>Password at least 8 character!</p>
                    ) : null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
