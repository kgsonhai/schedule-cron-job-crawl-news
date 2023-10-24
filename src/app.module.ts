import { Module } from "@nestjs/common";
import { ScheduleJobModule } from "./module/schedule-job/schedule-job.module";
import { crawlNewsModule } from "./module/crawl-news/crawl-news.module";

@Module({
  imports: [ScheduleJobModule, crawlNewsModule],
})
export class AppModule {}
