<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistemas de pagos electrónicos
    .row.bg-c11
      .col-12.p-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 #[b Los sistemas de pago electrónico facilitan las transacciones digitales para adquirir bienes y servicios, bien sea en tiendas online o físicas. A continuación, se estudiarán los elementos implícitos en este tipo de procesos.]
        Separador
        #t_3_1
        .titulo-segundo.color-acento-contenido
          h2 3.1 Tipos de <em>blockchain</em>
        .dual-txt-deco2.mb-5
          p Actualmente se pueden encontrar diferentes tipos de cadenas de bloques, entre ellos están Bitcoin, Ethereum, Dash, Monero o Zcash. Este tipo de <em>blockchain</em> mantienen abierto al público sus datos, el <em>software</em> y su desarrollo, de forma que cualquier persona puede revisar, auditar, desarrollar o mejorar los mismos; se invita a ver el siguiente recurso para conocer más sobre ellos.
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="<em>Blockchains</em> Públicos")
            .col-12
              p.mb-5 Este tipo de redes, debido al tiempo en que llevan en desarrollo y adopción y conservando su naturaleza abierta, originaron oportunidades para que sus miembros participaran abiertamente bien sea como desarrolladores, mineros o usuarios. Preferidas por la transparencia de sus transacciones, entre otras características se puede encontrar las siguientes:
              .row.align-items-center
                .col-lg-8
                  ul.lista-ul--color.lista-ul--separador
                    li 
                      i.fas.fa-pen-square
                      | El diseño de sus cadenas de bloques públicas es y continuará siendo descentralizado.
                    li 
                      i.fas.fa-pen-square
                      | Son consideradas resistentes a la censura, ya que no son sujetas a restricciones para operar con las demás redes.
                    li 
                      i.fas.fa-pen-square
                      p Provee beneficios para la programación de sus cadenas de bloques públicas, lo que motiva y premia mediante <em>recom</em>, esquema de premios o incentivos (puede ser a través de <em>tokens</em> o criptomonedas) para recompensar a los participantes en la red que resulten honestos tras las validaciones de bloques.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img1.svg' style="width: 350px").m-auto
          .row(titulo="<em>Blockchains</em> Privados")
            .col-12
              p.mb-5 Conocidas como <em>blockchains</em> autorizadas, presentan una gran diferencia frente a las públicas, las cuales radican en:
              .row.align-items-center
                .col-lg-8
                  ul.lista-ul--color.lista-ul--separador
                    li 
                      i.fas.fa-pen-square
                      | No son de uso libre, y están sujetas a un consentimiento para unirse.
                    li 
                      i.fas.fa-pen-square
                      | Las transacciones y operaciones dentro de la red son privadas y solo pueden observarse por miembros autorizados dentro de su ecosistema
                    li 
                      i.fas.fa-pen-square
                      p Puede existir, así como también puede no existir un <em>token</em> asociado con la cadena.
                    li 
                      i.fas.fa-pen-square
                      | Son generalmente centralizadas a diferencia de las públicas que con descentralizadas, y estas son controladas por un referente central que administra las autorizaciones.
                    li 
                      i.fas.fa-pen-square
                      | Son útiles para las empresas que desean colaborar y compartir datos, pero no quieren que sus datos empresariales confidenciales sean visibles en una cadena de bloques pública.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img2.svg' style="width: 350px").m-auto
          .row(titulo="<em>Blockchains</em> Híbridos")
            .col-12
              .row.align-items-center
                .col-lg-8
                  p Presenta una combinación de las redes públicas y privadas aprovechando características de ambas, en donde sus miembros determinan qué operaciones serán públicas y cuáles estarán solo abiertas a un grupo más reducido de participantes.
                  p Este tipo de red garantiza que las transacciones sean privadas pero verificables, haciendo uso del historial en la <em>blockchain</em> pública. Además, los miembros tienen los mismos derechos para ver, editar y agregar su permiso a una transacción, pero la privacidad entre transacciones en cuanto a su identidad nunca se revela a otras partes de la red.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img3.svg' style="width: 350px").m-auto
    h4.mb-5 La siguiente tabla 3 presenta las principales diferencias entre los tipos de redes <em>blockchain</em>:
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 3]. Principales diferencias entre los tipos de redes <em>blockchain</em>
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th
                th 
                  p.text-center.text-white.mb-0 Públicos 
                  p.text-center.text-white.mb-0 Bitcoin, Ethereum, Litecoin
                th
                  p.text-center.text-white.mb-0 Privada 
                  p.text-center.text-white.mb-0 Hyperledger, Corda, Quorum
                th
                  p.text-center.text-white.mb-0 Federados 
                  p.text-center.text-white.mb-0 Hyperledger, Corda, QXuorum
                th
                  p.text-center.text-white.mb-0 <em>Blockchain as a service</em>
                  p.text-center.text-white.mb-0 <em>IBM, Microsoft, Amazon</em>
            tbody.bgr_1
              tr
                th Cualquiera puede participar.
                th &check;
                th X
                th X
                th N/A
              tr
                th Los participantes actúan, en general, como nodos.
                th &check;
                th X
                th X
                th N/A
              tr
                th Transparencia.
                th &check;
                th &tilde;
                th &tilde;
                th N/A
              tr
                th Hay un único administrador.
                th X
                th X
                th &check;
                th N/A
              tr
                th Hay más de un administrador.
                th &check;
                th X
                th X
                th N/A
              tr
                th No hay administradores.
                th &check;
                th X
                th X
                th N/A
              tr
                th Ningún participante tiene más derechos que los demás.
                th &check;
                th X
                th X
                th N/A
              tr
                th Se pueden implementar #[i Smart Contracts].
                th &check;
                th &check;
                th &check;
                th N/A
              tr
                th Existe recompensa por minado de bloques.
                th &tilde;
                th X
                th X
                th N/A
              tr
                th Soluciona problema de falta de confianza.
                th &check;
                th X
                th &tilde;
                th N/A
              tr
                th Seguridad basada en protocolos de consenso.
                th &check;
                th X
                th &tilde;
                th N/A
              tr
                th Seguridad basada en funciones <em>hash</em>.
                th 
                th &tilde;
                th &tilde;
                th N/A
              tr
                th Provee servicios en la nube.
                th N/A
                th N/A
                th N/A
                th &check;
        .row.justify-content-evenly
          .col-md-6.col-lg.mb-4
            .row
              .col-auto.bg-c12.p-3
                p.text-center.mb-0.text-white #[b &check;]
              .col-auto.bg-c12b
                .row.align-items-center.h-100
                  .col-12
                    p.text.center.mb-0 SI
          .col-md-6.col-lg.mb-4
            .row
              .col-auto.bg-c12.p-3
                p.text-center.mb-0.text-white X
              .col-auto.bg-c12b
                .row.align-items-center.h-100
                  .col-12
                    p.text.center.mb-0 NO
          .col-md-6.col-lg.mb-4
            .row
              .col-auto.bg-c12.p-3
                p.text-center.mb-0.text-white #[b &tilde;]
              .col-auto.bg-c12b
                .row.align-items-center.h-100
                  .col-12
                    p.text.center.mb-0 A VECES
          .col-md-6.col-lg
            .row
              .col-auto.bg-c12.p-3
                p.text-center.mb-0.text-white #[b N/A]
              .col-auto.bg-c12b
                .row.align-items-center.h-100
                  .col-12
                    p.text.center.mb-0 NO APLICA
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Herramientas de comercio electrónico asociadas a #[i blockchain]
    .row.bg-c13
      .col-12.px-5
        .row.align-items-center.bg-c1.mb-5
          .col-lg-3.mb-4.mb-lg-0.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema3/img3.png' style="width: 350px").m-auto
          .col-lg-9.my-4.mb-ly-0.order-1.order-lg-2
            p Gracias a la masiva adopción global de criptoactivos en los últimos años, así como la implementación de servicios de comercio electrónico basados en <em>blockchain</em>, cada día es más común encontrar alternativas para el pago en establecimientos y pasarelas de comercio electrónico haciendo uso de criptomonedas, y para identificar y resaltar algunos beneficios del uso del <em>blockchain</em>, a continuación se van a resaltar las siguientes condiciones que favorecen su adopción.
            .row
              .col-12
                figure.d-flex.justify-content-end
                  img(src='@/assets/curso/tema2/img6.svg' style="width: 50px")
        TabsC.color-acento-contenido.bgr_7.mb-5
          .py-3.py-md-4(titulo="Rastreo")
            .row.align-items-center.justify-content-center
              .col-lg-5.mb-4.mb-lg-0
                h4 Rastreo
                p Gracias a redes de cadenas de bloques podemos tener el registro de cada movimiento de los productos desde su elaboración hasta que el usuario lo recibe en la puerta de su casa, gracias al registro de auditoría consignado en los registros de los bloques de la red.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema3/img4.svg' style="width: 350px").m-auto
          .py-3.py-md-4(titulo="Mayor eficiencia y velocidad")
            .row.align-items-center.justify-content-center
              .col-lg-5.mb-4.mb-lg-0
                h4 Mayor eficiencia y velocidad
                p Dado que el registro de operaciones manuales puede estar sujeto a errores humanos y de transcripción se pueden generar retrasos dado por reprocesos en las operaciones de comercio electrónico; <em>Blockchain</em> abre la posibilidad de la automatización de procesos agilizando la toma de decisiones mejorando la velocidad y aprovechamiento de los recursos.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema3/img5.svg' style="width: 350px").m-auto
          .py-3.py-md-4(titulo="Transparencia")
            .row.align-items-center.justify-content-center
              .col-lg-5.mb-4.mb-lg-0
                h4 Transparencia
                p Todas las transacciones son abiertas y están disponibles para los miembros de la red, para realizar su revisión y verificación, lo que agrega una capa de confianza a la información consagrada en la red.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema3/img6.svg' style="width: 350px").m-auto
          .py-3.py-md-4(titulo="Seguridad")
            .row.align-items-center.justify-content-center
              .col-lg-5.mb-4.mb-lg-0
                h4 Seguridad
                p En comparación con los demás sistemas de registro, la seguridad de <em>blockchain</em> se proporciona de diferentes maneras. En primer lugar, todos los participantes deben acordar las transacciones antes de registrarlas. Después de aprobada, la transacción se cifra y se conecta a la transacción anterior. En segundo lugar, en lugar de almacenar la información en un único servidor, se encuentra almacenada en una cadena de ordenadores. En este sentido, es un proceso complicado hackear el sistema, dificultando el acceso no autorizado y el compromiso de los datos de transacción.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema3/img7.svg' style="width: 350px").m-auto
          .py-3.py-md-4(titulo="Bajo costo")
            .row.align-items-center.justify-content-center
              .col-lg-5.mb-4.mb-lg-0
                h4 Bajo costo
                p La reducción de intermediarios para la ejecución de las transacciones permite la reducción de pago por comisiones, ya que las validaciones se realizan a través de la misma red y por sus miembros.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema3/img8.svg' style="width: 350px").m-auto
        .dual-txt-deco2.mb-5
          p.mb-0 Dado el panorama anteriormente presentado, las ventajas de la adopción del <em>blockchain</em> en el comercio electrónico se hacen más viables, y se presentan algunas soluciones que pueden ser útiles para su implementación, como son:
        .row.justify-content-center.mb-5
          .col-lg-10
            PasosA.color-primario(tipo="n")
              .row
                .col-lg-8.mb-4.mb-lg-0
                  h4 Métodos alternativos de pago
                  p Dada la masificación de criptomonedas y el establecimiento de los ecosistemas de interacción, el pago con este tipo de bienes se facilita al reducir intermediarios, y ofreciendo una gama amplia de monedas para realizar los pagos, hoy en día vemos gran cantidad de plataformas para pago como paypal que inició sus pilotos para pago abierto con bitcoin.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img9.svg' style="width: 150px").m-auto
              .row
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/img10.svg' style="width: 100px").m-auto
                .col-lg-8
                  h4.txt-c3 Transacciones rápidas
                  p.txt-c3 Las transacciones se realizan en un menor tiempo, entre un 2 % y 6 % menos, con una validación de 16 pasos promedio, lo que agiliza considerablemente la transacción y confirmación de las compras.
              .row
                .col-lg-8.mb-4.mb-lg-0
                  h4 Sistema de pago seguro
                  p El <em>blockchain</em> proporciona seguridad, integridad y privacidad al habilitar tanto vendedores como clientes a realizar transacciones seguras, evitando fraudes u otras experiencias desagradables.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img11.svg' style="width: 150px").m-auto
              .row
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/img12.svg' style="width: 130px").m-auto
                .col-lg-8
                  h4.txt-c3 Control de inventario
                  p.txt-c3 La gestión de la información actualizada y de manera automatizada cobra relevancia en el mantenimiento de stocks de información.
              .row
                .col-lg-8.mb-4.mb-lg-0
                  h4 Lealtad y recompensas
                  p Permite una fidelización de clientes y la asignación de recompensas a partir de la implementación de contratos inteligentes permitiendo mantener la información sin alteraciones.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img13.svg' style="width: 150px").m-auto
    p.mb-5 Actualmente se encuentra una gran variedad de soluciones para la implementación del <em>blockchain</em> en soluciones de comercio electrónico, que permiten potenciar y facilitar la adopción de esta tecnología de una manera fácil y rápida aprovechando las ventajas de la Web3, además de algunas soluciones financieras, de desarrollo, gobernanza, seguridad, y autenticación, entre otros.
    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido
      h2 3.3 Minería de bloques
    .row.bg-c14
      .col-12.px-5
        .row.justify-content-center
          .col-12
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/tema3/img5.png", alt="alt")
        .row.justify-content-center.top--negMargin(data-aos="fade").mb-5
          .col-10
            .crd.bg--gray.shadow.brd--rad_01.p-4
              p.mb-0 Como se ha presentado anteriormente, el <em>blockchain</em> está conformado por bloques que almacenan información y un <em>hash</em> que garantiza que la información no sea modificada, pero debajo de ese proceso de bloques existe un proceso que conlleva a crecer, mantener la red y las transacciones que le dan vida, a este proceso se le llama minado, el cual permite contar cada 10 minutos con un nuevo bloque en la red de Bitcoin, por ejemplo, este proceso se concentra básicamente en los siguientes pasos:
        .row.align-items-center.mb-4
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img6.png' style="width: 450px").m-auto
          .col-lg-7
            .row.mb-4
              .col-auto.py-2.px-3.bg-c2
                h4.mb-0.text-white Transacción
            p.mb-5 El proceso de minado de un nuevo bloque inicia cuando un usuario desea enviar una cierta cantidad de criptomonedas a otra persona. Entonces, envía dicha transacción con los datos desde su <em>wallet</em>, a la espera de que la red la realice y confirme. Allí permanecen hasta que sea minado un bloque donde puedan incluirse y validarse.
            .row.mb-4
              .col-auto.py-2.px-3.bg-c2
                h4.mb-0.text-white Compilación
            p.mb-5 Estas transacciones pendientes en la red, son recopiladas y agrupadas en un bloque de transacciones por los nodos mineros. Es muy probable que varios mineros recojan las mismas transacciones y todas estarán sin confirmar hasta que no se mine el bloque.
            .row.mb-4
              .col-auto.py-2.px-3.bg-c2
                h4.mb-0.text-white Formación
            p Cada minero seleccionará las transacciones que desea incluir y construirá su propio bloque. Si existen transacciones ya validadas e incluidas en el bloque anterior, serán eliminadas de este. Este nuevo bloque se conoce como candidato, ya que aún no es válido porque no cuenta con una prueba de trabajo válida.
        p.mb-5 En la formación de este nuevo bloque, se debe incluir un encabezado que contenga el <em>hash</em> del bloque anterior, la raíz de Merkle y los datos para la competencia minera. Es decir, la marca de tiempo, el objetivo del algoritmo de PoW para dicho bloque (los <em>bits</em>), la versión del <em>software</em> y el <em>nonce</em>.
        .row.mb-4
          .col-auto.py-2.px-3.bg-c2
            h4.mb-0.text-white Prueba de trabajo
        p.mb-4 Una vez que cada minero haya conformado su propio bloque de transacciones, deberá encontrar una firma válida para dicho bloque. Es decir, realizar una prueba de trabajo. Cada minero debe realizar un proceso de cálculo matemático que es único para cada bloque que formaron. Por lo que, aunque el procedimiento sea el mismo, el resultado será totalmente diferente para cada uno. Este complejo cálculo implica mucho poder computacional, y por ende, un gran gasto de energía eléctrica. Que también dependerá de la dificultad del sistema para el momento del minado.
    .row.align-items-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        p La solución que deben encontrar los mineros es conocida como <em>hash</em>. Esta función es muy difícil de encontrar, pero una vez hallada, es fácil de verificar por los otros nodos. Para que así puedan comprobar que el <em>hash</em> de salida cumpla con las condiciones establecidas del sistema.
        p Para encontrar un <em>hash</em> de salida válido, los mineros realizan los cálculos matemáticos de forma repetitiva una y otra vez a través de un <em>nonce</em>, que es un número aleatorio que utilizan y cambian constantemente hasta encontrar una firma o <em>hash</em> de salida que sea válido según la condición. No hay forma de predecir que <em>nonce</em> resolverá el problema, por lo que deben emplear tantos como sea necesario, en este caso se está hablando de miles de millones de valores.
        p En caso de la red Bitcoin, el sistema condiciona que el <em>hash</em> de salida debe contener un determinado número de ceros al inicio del <em>hash</em>.
      .col-lg-2
        figure
          img(src='@/assets/curso/tema3/img14.svg' style="width: 150px").m-auto
    .row.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0.order-2.order-lg-1
        figure
          img(src='@/assets/curso/tema3/img15.svg' style="width: 350px").m-auto
      .col-lg-9.order-1.order-lg-2
        .row.mb-4
          .col-auto.py-2.px-3.bg-c2
            h4.mb-0.text-white Transmisión
        p Cuando un nodo minero logra encontrar un <em>hash</em> de salida válido para un bloque, transmite dicho bloque junto con la firma a los demás nodos de la red para que estos puedan validarlo.
        p En este momento, siempre y cuando no hayan emitido los 21 millones de bitcoins, el minero recibe la recompensa establecida por el minado, poniendo bitcoins nuevos en circulación. Esto se registra en su propio nodo, el resto de nodos de la red lo hará en el siguiente paso.
        p Además, independientemente de que se hayan emitido todos los bitcoins o no, el minero también recibe todas las comisiones de minado que los usuarios hayan puesto en las transacciones que componen este bloque.
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        .row.mb-4
          .col-auto.py-2.px-3.bg-c2
            h4.mb-0.text-white Verificación
        p Los demás nodos de la red se encargan de validar y verificar que el bloque y el <em>hash</em> cumplen con las condiciones del sistema, verificando su legitimidad y si realmente contiene la cantidad de ceros establecida.
        p.mb-5 Aquí también se confirma la prueba de trabajo, es decir, el poder computacional que se gastó para encontrar la solución, y se anota que el minero que descubrió el bloque efectivamente puede hacer uso de los bitcoins recién recibidos.
        .row.mb-4
          .col-auto.py-2.px-3.bg-c2
            h4.mb-0.text-white Confirmación
        p Una vez añadido el nuevo bloque a la <em>blockchain</em>, todos los demás que sean añadidos sobre este contarán como una confirmación. En este punto, se puede llegar a pensar que como cada minero inició el proceso con su propio bloque, pueden continuar con el minado. Pero no es así. Una vez que se genere un bloque, todos los nodos mineros deben comenzar el proceso formando un nuevo bloque de transacciones. No pueden continuar minando el bloque anterior debido a que cada bloque debe añadir el <em>hash</em> de salida del bloque que le precede.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema3/img16.svg' style="width: 350px").m-auto
    .cajon.color-acento-contenido.p-4
      p.mb-0 Ahora bien, para ejecutar estos pasos existen empresas dedicadas a la minería, las cuales ofrecen a inversores  realizar aportes a cambio de beneficios que pueden ser en la misma moneda, o también se puede realizar a partir de hardware que cuente con ciertas características técnicas que permita aprovechar los beneficios, encontrando grandes infraestructuras de hardware destinadas a esta tarea.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
