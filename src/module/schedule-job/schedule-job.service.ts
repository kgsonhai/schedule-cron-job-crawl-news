import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { CronExpressionCustom } from "src/utils/common";
import { crawlNewsService } from "../crawl-news/crawl-news.service";

@Injectable()
export class ScheduleJobService {
  constructor(private readonly crawlNewsService: crawlNewsService) {}

  @Cron(CronExpressionCustom.EVERY_DAY_AT_THIS_TIME)
  runCrawlAudioEveryDay() {
    console.log("crawl Audio EveryDay");
    this.crawlNewsService.crawlNews();
  }
}
