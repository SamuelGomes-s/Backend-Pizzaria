import { Response, Request } from "express";
import { AuthUserService } from "../../services/user/AuthUserSevice";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const authUserService = new AuthUserService();
    const auth = await authUserService.execute({
      email,
      password,
    });
    return res.json(auth);
  }
}

export { AuthUserController };
