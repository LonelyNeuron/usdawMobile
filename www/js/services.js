angular.module('starter.services', [])


.factory('Whyjoin', function(){
      var joinReason = [
        {
          id: 0,
          title: 'Better pay',
          icon: "ion-umbrella",
          detail: "By negotiating better pay and conditions. Every year Usdaw negotiates improvements to pay for hundreds of thousands of members."
        },
        {
          id: 1,
          title: 'Safer workplace',
          icon: "ion-lock-combination",
          detail: "You are twice as likely to have an accident at a workplace where there isn’t a union.\
          With 5,000 Health and Safety Reps, Usdaw makes sure that your safety at work is taken seriously."
        },
        {
          id: 2,
          title: 'Advice & support',
          icon: "ion-umbrella",
          detail: "10,000 Usdaw workplace reps advise and support you at work and are backed up by highly trained Usdaw Officials. Specialists in the field of pensions, health and safety, education, management, wages and employment law are all on hand to help."
        },        {
          id: 3,
          title: 'Better conditions',
          icon: "ion-umbrella",
          detail: "Usdaw works to get Union members better holiday entitlement, good pension provision and improved arrangements for time off work.\
          By negotiating with employers Usdaw is able to make your life at work better. Negotiations aren’t just about pay as we aim to improve the other things that matter at work such as holidays, pensions, shift arrangements, etc."
        },
        {
          id: 4,
          title: 'Protection at work',
          icon: "ion-medkit",
          detail: "that Union members have strong and effective representation, Usdaw is able to protect people at work and help resolve issues before they become major problems. Usdaw ensures that members are aware of their rights in the workplace."
        },
        {
          id: 5,
          title: 'Fairness at work',
          icon: "ion-umbrella",
          detail: "Union workplaces are fairer workplaces and are much more likely to have family friendly policies.\
          By negotiating with employers, unions are able to secure better deals for members on issues such as career opportunities, flexible working arrangements and general support for family responsibilities.  In short, unions help you achieve a work - life balance without being penalised for it. More job security Usdaw works to protect jobs and deliver job security for members.  Without a union you are on your own if faced with change at work or redundancy."
        },
        {
          id: 6,
          title: 'Your voice',
          icon: "ion-android-microphone",
          detail: "With over 10,000 workplace reps, Usdaw gives you a voice at work.   Without a union you are less likely to have a say in your terms and conditions and how your employer operates."
        },
        {
          id: 7,
          title:'Legal & accident cover',
          icon: "ion-umbrella",
          detail:"Usdaw’s legal service wins millions in compensation each year for members. As an Usdaw member, the legal service is entirely free – you don’t pay a penny. No one plans to have an accident but if you do, Usdaw will help you with your claim for compensation for any accident, anywhere and if you win your case you keep 100% of the compensation. Usdaw will also provide you with free legal advice on any issue."
        },
        {
          id: 8,
          title:'Employment Tribunal Fees *',
          icon: "ion-ios-cart-outline",
          detail:"On 29 July 2013 the Government introduced fees to use the Employment Tribunal system. For example, in an unfair dismissal claim this means that you will have to pay £250 to issue your claim and a further £950 to go to a tribunal hearing unless you qualify for ‘remission’ (where you may not have to pay all or part of the fees based on your household finances).\
          Usdaw will continue to represent our members in employment cases as we do now at no cost to our members, as we will advance you the fee and seek to recover it from the other side in successful cases.\
          * Note that ET Fees do not apply in Northern Ireland."
        },
        {
          id: 9,
          title: 'Member offers & discounts',
          icon: "ion-ios-cart-outline",
          details: "Usdaw works with all of its affinity partners to get you and your family the best deals available on everything from theme parks, to home, car and travel insurance, to great discounts at high street shops and restaurants. Could Usdaw membership save you money? For more information visit: www.usdaw.org.uk/offers"
        }];

      return {
        all: function() {
          return joinReason;
        },
        get: function(reasonId) {
          for (var i = 0; i < joinReason.length; i++) {
            if (joinReason[i].id === parseInt(reasonId)) {
              return joinReason[i];
            }
          }
          return null;
        }
      };


})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Legal Advice',
    lastText: 'From thet day you join : Legal Plus is one of the great services available to help Usdaw members and their families.',
    face: '../img/logo-usdaw.png'
  }, {
    id: 1,
    name: 'Discounts & Offers',
    lastText: 'Usdaw members are entitled to great offers and savings from a variety of companies',
    face: '../img/logo-usdaw.png'
  },{
    id: 2,
    name: 'Usdaw Health & Dental Plan',
    lastText: 'As a special offer for Usdaw members, you\'re covered immediately as soon as you join the dental plan!',
    face: '../img/logo-usdaw.png'
  },{
    id: 4,
    name: 'Chatter Zone',
    lastText: 'Ask / Answer a question.',
    face: '../img/logo-usdaw.png',
    conv: [{
      id: 10,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
      id: 11,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    },{
      id: 12,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 13,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
    }]
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory ('Dashboard', function(){
  var news = [{
      id: 0,
      date: "03 June 2015",
      headr: "Usdaw General Secretary John Hannett is re-elected President of UNI Europa Commerce",
      linkr: "https://www.usdaw.org.uk/About-Us/News/2015/June/Usdaw-General-Secretary-John-Hannett-is-re-elected"
  },{
    id: 1,
    date: "18 May 2015",
    headr: "Labour must reflect on the election in the right spirit and have a honest debate about the future",
    linkr: ""
  },{
    id: 2,
    date: "13 May 2015",
    headr: "Usdaw urges Jim Murphy to stay in post and shape a new direction for Scottish Labour",
    linkr: ""
  },{
    id: 4,
    date: "30 April 2015",
    headr: "Former Woolworths and Ethel Austin workers are heartbroken by the injustice of the European Court",
    linkr: ""
  }];

  var campaigns = [{
    id: 0,
    date: "03 June 2015",
    headr: "Usdaw-Mental Health Awareness",
    detail:"Many people feel under pressure at work and at home; having to cope with changes to hours, rising food and fuel bills and changes to benefits. When times are tough people can feel anxious and worried, which can in turn affect their mental health.\
    We want to encourage workers who feel under pressure to talk to their union sooner rather than later. We can help to make a difference by ensuring they get the advice and support they need. Usdaw also seeks to work with employers to develop policies and procedures that support staff worried about their mental health.",
    linkr: "https://www.thunderclap.it/projects/27471-usdaw-mental-health-awareness"
  },{
    id: 1,
    date: "13 - 14 June 2015",
    headr: "Freedom From Fear",
    linkr: "https://www.usdaw.org.uk/Campaigns/Freedom-From-Fear/Survey-of-violence-and-abuse-against-retail-staff"
  },{
    id: 2,
    date: "13 - 14 June 2015",
    headr: "STUC Youth Conference",
    linkr: "https://www.youtube.com/watch?v=VM6Mf1C1WeU"
  }];

  var events =[{
    id: 0,
    date: "03 June 2015",
    headr: "Supporting Parents and Carers Spotlight Day",
    linkr: "https://www.usdaw.org.uk/About-Us/News/2015/June/Usdaw-General-Secretary-John-Hannett-is-re-elected"
  },{
    id: 1,
    date: "13 - 14 June 2015",
    headr: "National LGBT Get-together (Manchester)",
    linkr: ""
  },{
    id: 2,
    date: "13 - 14 June 2015",
    headr: "STUC Youth Conference",
    linkr: "www.stuc.org.uk"
  },{
    id: 4,
    date: "13 - 14 June 2015",
    headr: "Usdaw Warehouse and Distribution Trades Conference",
    linkr: ""
  }];
  return {
    allNews: function () {
      return news;
    },
    allEvents: function () {
      return events;
    },
    allCampaigns: function () {
      return campaigns;
    }
  }

})