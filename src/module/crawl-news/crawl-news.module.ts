import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { crawlNewsService } from "./crawl-news.service";

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [crawlNewsService],
  exports: [crawlNewsService],
})
export class crawlNewsModule {}
