$(document).ready(function()
{
	alteraStatus(1);
	var alturAtual = $(window).height();
	$(window).scroll(function()
	{
		var distanciaTopo = $(window).scrollTop();
		var pos = 0;
		if ( distanciaTopo < alturAtual)
		{
			pos = 1;
		}
		else if (distanciaTopo >= alturAtual && distanciaTopo < (2*alturAtual))
		{
			pos = 2;
		}
		else if (distanciaTopo >= (2*alturAtual) && distanciaTopo < (3*alturAtual))
		{
			pos = 3;
		}
		else if (distanciaTopo >= (3*alturAtual) && distanciaTopo < (4*alturAtual))
		{
			pos = 4;
		}
		else if (distanciaTopo >= (4*alturAtual) && distanciaTopo < (5*alturAtual)) //-2
		{
			pos = 5;
		}
		else
		{
			pos = 6;
		}

		alteraStatus(pos);
	});
});

function alteraStatus (pos)
{
	$(".navbar li").removeClass("select");
	$(".navbar li:nth-child("+pos+")").addClass("select");
}
