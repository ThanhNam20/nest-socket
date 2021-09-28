/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class QuestionService {
  data = [
    {
      question_title: "Ahihi",
      question_id: uuidv4(),
      answers: [
        {
          answer_id: uuidv4(),
          answer_title: "thanh nam 312",
          answer_status: true
        },{
          answer_id: uuidv4(),
          answer_title: "312",
          answer_status: false
        },{
          answer_id: uuidv4(),
          answer_title: "dfgfd",
          answer_status: false
        },{
          answer_id: uuidv4(),
          answer_title: "697897",
          answer_status: false
        }
      ]
    },
    {
      question_title: "Tình là trò chơi ân ái sao nghe nhói đau",
      question_id: uuidv4(),
      answers: [
        {
          answer_id: uuidv4(),
          answer_title: "thanh nam 1",
          answer_status: false
        }, {
          answer_id: uuidv4(),
          answer_title: "thanh nam 2",
          answer_status: true
        }, {
          answer_id: uuidv4(),
          answer_title: "thanh nam 3",
          answer_status: false
        }, {
          answer_id: uuidv4(),
          answer_title: "thanh nam 4",
          answer_status: false
        }
      ]
    },
    {
      question_title: "Song trong doi song can co mot tam long",
      question_id: uuidv4(),
      answers: [
        {
          answer_id: uuidv4(),
          answer_title: "m hahaha",
          answer_status: false
        }, {
          answer_id: uuidv4(),
          answer_title: "thanh sdf hahaha",
          answer_status: false
        }, {
          answer_id: uuidv4(),
          answer_title: "sdfsd haha",
          answer_status: true
        }, {
          answer_id: uuidv4(),
          answer_title: "thanh nam hahaha",
          answer_status: false
        }
      ]
    },
    {
      question_title: "Con cai nit",
      question_id: uuidv4(),
      answers: [
        {
          answer_id: uuidv4(),
          answer_title: "eqwe",
          answer_status: true
        }, {
          answer_id: uuidv4(),
          answer_title: "423423",
          answer_status: false
        }, {
          answer_id: uuidv4(),
          answer_title: "342423",
          answer_status: false
        }, {
          answer_id: uuidv4(),
          answer_title: "gggggga",
          answer_status: false
        }
      ]
    },
    {
      question_title: "Ahihi",
      question_id: uuidv4(),
      answers: [
        {
          answer_id: uuidv4(),
          answer_title: "thanh nam hahaha",
          answer_status: true
        }, {
          answer_id: uuidv4(),
          answer_title: "thanh nam hahaha",
          answer_status: false
        }, {
          answer_id: uuidv4(),
          answer_title: "thanh nam hahaha",
          answer_status: false
        }, {
          answer_id: uuidv4(),
          answer_title: "thanh nam hahaha",
          answer_status: false
        }
      ]
    },

  ]
  constructor() { }
  getAllQuestion() {
    return this.data;
  }
}
