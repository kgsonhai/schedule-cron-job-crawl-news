import { Injectable } from "@nestjs/common";
import axios from "axios";

import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

@Injectable()
export class crawlNewsService {
  private username = process.env.username;
  private password = process.env.password;

  async crawlNews() {
    try {
      const { data } = (await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          username: this.username,
          password: this.password,
        }
      )) as any;

      if (!data.accessToken) return;

      return await axios.post(
        "http://localhost:8080/api/admin/crawler",
        {},
        {
          headers: {
            Authorization: `Bearer ${data.accessToken}`,
          },
        }
      );
    } catch (error) {
      console.log({ error });
    }
  }
}
