import { Service, NedbServiceOptions } from 'feathers-nedb';
import { Application } from '../../declarations';
import crypto from 'crypto';
import { Params } from 'express-serve-static-core';

const gravatarUrl = 'https://s.gravatar.com/avatar';
const query = 's=60';

interface UserData {
  _id? : string;
  email : string;
  password : string;
  avatar? : string;
  githubId? : string;
}

export class Users extends Service<UserData> {
  constructor(options: Partial<NedbServiceOptions>, app: Application) {
    super(options);
  }

  create(data : UserData, params?: Params){
      const {email,password,githubId} = data;
      const hash  = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
      const avatar = `${gravatarUrl}/${hash}?${query}`;
      const userData = {
        email,
        password,
        githubId,
        avatar
      };
      return super.create(userData,params);
    }  
};
