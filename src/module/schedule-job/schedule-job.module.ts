import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { ScheduleJobService } from "./schedule-job.service";
import { crawlNewsModule } from "../crawl-news/crawl-news.module";

@Module({
  imports: [ScheduleModule.forRoot(), crawlNewsModule],
  providers: [ScheduleJobService],
  exports: [ScheduleJobService],
})
export class ScheduleJobModule {}
