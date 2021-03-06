module.exports = 
{
    "title": "Palmyra Racing Association Membership Application",
    "description": 
      "Please complete all sections.  Note that when your application is accepted we will need payment, waiver of liability, minor waivers, and health insurance "+
      "information.  We do not need any of that at the time of application.  The current year dues are $500."+
      "If you'd prefer to use a paper form, you can access it at the bottom of the page, scan it, and email it to hogbacksecretary@gmail.com.",
    "type": "object",
    "required": [
      "firstName", "lastName", "address", "city", "state", "zip", "phone", 
      "email", "birthday", "signature",
    ],
    "properties": {
      "firstName": {
        "type": "string",
        "title": "First name",
        "minLength": 2,
        "maxLength": 14
      },
      "lastName": {
        "type": "string",
        "title": "Last name",
        "minLength": 2,
        "maxLength": 14
      },
      "address": {
        "type": "string",
        "title": "Address"
      },
      "city": {
        "type": "string",
        "title": "City"
      },
      "state": {
        "type": "string",
        "title": "State",
        "default": "NY",
        "minLength": 2,
        "maxLength": 2
      },
      "zip": {
        "type": "string",
        "title": "Zip",
        "maxLength": 5
      },
      "phone": {
        "type": "string",
        "title": "Preferred Phone Number (including area code)",
        "minLength": 10,
        "maxLength": 12
      },
      "email": {
        "type": "string",
        "format": "email",
        "title": "E-mail"
      },
      "birthday": {
        "type": "string",
        "format": "date", 
        "title": "Birthday"
      },
      "occupation": {
        "type": "string",
        "title": "Occupation"
      },
      "recommendedBy": {
        "type": "string",
        "title": "Recommended By"
      },
      "familyMembers": {
        "type": "string",
        "title": 
          `Family members (list all names and ages).  Please note: that children aged 18 and up must be in the same household, and either a student or active miltary 
           to be on a family membership.  Proof of insurance is required for all family members your application is accepted.`
      },
      "signature": {
        "type": "string",
        "title": "Signature of Applicant"
      },
    }
};