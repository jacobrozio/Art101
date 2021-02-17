/**
 * Author:    Jacob Rozio
 * Created:   2.17.2021
 *
 * (c) Copyright by Blub Corp.
 **/

 var buttonVar1 = $('<button>toggle me</button>').click(function () { $("#challenges").toggleClass("special"); });

 var buttonVar2 = $('<button>hit me</button>').click(function () { $("#problems").toggleClass("special"); });

 var buttonVar3 = $('<button>toggle</button>').click(function () { $("#results").toggleClass("special"); });

 $('#challenges').append(buttonVar1);
 $('#problems').append(buttonVar2);
 $('#results').append(buttonVar3);
 
