/**
 * Stretch goal - Validate all the emails in this files and output the report
 *
 * @param {string[]} inputPath An array of csv files to read
 * @param {string} outputFile The path where to output the report
 */

import fs from 'fs';
import dns from 'dns'
import validator from 'email-validator';

async function validateEmailAddresses(inputPath: string[], outputFile: string) {
       const fsEmails = fs.readFileSync(inputPath[0], 'utf-8');
       // console.log(fsEmails)

       const emails = fsEmails.trim().split('\n').slice(1);
       //console.log(emails)

    const validEmails = emails.map((email: any) => {
      if (validator.validate(email)) return email;
    }).filter((email: string | undefined) => email !== undefined);
   //console.log(validEmails)

  const validEmailDomains = validEmails.map((email: string) => dns.promises.lookup(email.split('@')[1]).then(() => email).catch(() => undefined));
  
  const resolvedEmailDomains = await Promise.all(validEmailDomains);

  const validDomains = resolvedEmailDomains.filter((email: string | undefined) => email !== undefined);
  validDomains.unshift("Emails")
 
  const output = validDomains.join('\n')
  //console.log(output)

  fs.writeFile('validDomains', JSON.stringify('end'), 'utf-8', (error) => {
    if(error) console.log(error)
    else console.log('result saved')
 })

}