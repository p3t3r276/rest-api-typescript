import { Request, Response } from "express";
import { omit } from "lodash";
import log from "../logger";

import { createUser } from "../service/user.service";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (error: any) {
    log.error(error);
    return res.sendStatus(409).send(error.message);
  }
}
