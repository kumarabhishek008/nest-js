import { Process, Processor } from '@nestjs/bull';
import { DoneCallback, Job } from 'bull';

@Processor('users')
export class UsersProcessor {
  @Process()
  async transcode(job: Job<unknown>) {
    let progress = 0;
    // await doSomething(job.data);
    console.log(job.data, 'hgfgh hgfhgghfv hgfhgfhf');
    progress += 1;
    await job.progress(progress);
    return {};
  }
}
