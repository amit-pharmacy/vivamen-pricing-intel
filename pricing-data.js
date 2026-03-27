// VivaMen Competitor Pricing Data
// Last updated: 2026-03-27
// Sources: Direct scraping of competitor websites

// Source URL map: competitor|product -> URL where this price was found
const SOURCE_URLS = {
  // --- Pharmica ---
  "Pharmica|Sildenafil": "https://www.pharmica.co.uk/erectile-dysfunction/treatments",
  "Pharmica|Tadalafil": "https://www.pharmica.co.uk/erectile-dysfunction/treatments",
  "Pharmica|Tadalafil Daily": "https://www.pharmica.co.uk/erectile-dysfunction/treatments",
  "Pharmica|Spedra": "https://www.pharmica.co.uk/erectile-dysfunction/treatments",
  "Pharmica|Viagra Connect": "https://www.pharmica.co.uk/erectile-dysfunction/treatments",
  "Pharmica|Finasteride": "https://www.pharmica.co.uk/hair-loss/treatments",
  "Pharmica|Regaine Foam": "https://www.pharmica.co.uk/hair-loss/treatments",
  "Pharmica|Regaine Solution": "https://www.pharmica.co.uk/hair-loss/treatments",
  "Pharmica|Priligy": "https://www.pharmica.co.uk/premature-ejaculation/treatments",

  // --- Doctor Fox ---
  "Doctor Fox|Sildenafil": "https://www.doctorfox.co.uk/sildenafil.html",
  "Doctor Fox|Tadalafil": "https://www.doctorfox.co.uk/tadalafil.html",
  "Doctor Fox|Tadalafil Daily": "https://www.doctorfox.co.uk/tadalafil.html",
  "Doctor Fox|Spedra": "https://www.doctorfox.co.uk/spedra.html",
  "Doctor Fox|Viagra Connect": "https://www.doctorfox.co.uk/erectile-dysfunction/viagra-connect.html",
  "Doctor Fox|Finasteride": "https://www.doctorfox.co.uk/finasteride.html",
  "Doctor Fox|Priligy": "https://www.doctorfox.co.uk/premature-ejaculation/priligy-dapoxetine.html",
  "Doctor Fox|Dapoxetine": "https://www.doctorfox.co.uk/premature-ejaculation/priligy-dapoxetine.html",
  "Doctor Fox|Regaine Foam": "https://www.doctorfox.co.uk/hair-loss-treatments/regaine.html",
  "Doctor Fox|Regaine Solution": "https://www.doctorfox.co.uk/hair-loss-treatments/regaine.html",

  // --- Numan ---
  "Numan|Sildenafil": "https://www.numan.com/erectile-dysfunction",
  "Numan|Tadalafil": "https://www.numan.com/erectile-dysfunction",
  "Numan|Viagra Connect": "https://www.numan.com/erectile-dysfunction",
  "Numan|Finasteride": "https://www.numan.com/hair-loss",
  "Numan|Minoxidil": "https://www.numan.com/hair-loss",
  "Numan|Regaine Foam": "https://www.numan.com/hair-loss",

  // --- Hims UK ---
  "Hims UK|Sildenafil": "https://www.forhims.co.uk/erectile-dysfunction/sildenafil",
  "Hims UK|Tadalafil": "https://www.forhims.co.uk/erectile-dysfunction/tadalafil",
  "Hims UK|Tadalafil Daily": "https://www.forhims.co.uk/erectile-dysfunction/tadalafil",
  "Hims UK|Viagra Connect": "https://www.forhims.co.uk/blog/how-much-is-viagra-connect",
  "Hims UK|Finasteride": "https://www.forhims.co.uk/hair-loss/finasteride",

  // --- Manual ---
  "Manual|Sildenafil": "https://www.manual.co/erectile-dysfunction",
  "Manual|Tadalafil": "https://www.manual.co/erectile-dysfunction",
  "Manual|Finasteride": "https://www.manual.co/hair-loss",

  // --- Pharmacy Online ---
  "Pharmacy Online|Sildenafil": "https://www.pharmacyonline.co.uk/online-doctor/erectile-dysfunction/sildenafil",
  "Pharmacy Online|Tadalafil": "https://www.pharmacyonline.co.uk/online-doctor/erectile-dysfunction/tadalafil",
  "Pharmacy Online|Spedra": "https://www.pharmacyonline.co.uk/online-doctor/erectile-dysfunction/spedra",
  "Pharmacy Online|Finasteride": "https://www.pharmacyonline.co.uk/online-doctor/hair-loss/finasteride",
  "Pharmacy Online|Viagra Connect": "https://www.pharmacyonline.co.uk/online-doctor/erectile-dysfunction/viagra-connect",
  "Pharmacy Online|Priligy": "https://www.pharmacyonline.co.uk/online-doctor/premature-ejaculation/priligy",
  "Pharmacy Online|Tadalafil Daily": "https://www.pharmacyonline.co.uk/online-doctor/erectile-dysfunction/tadalafil",

  // --- Oushk Pharmacy ---
  "Oushk Pharmacy|Sildenafil": "https://www.oushkpharmacy.com/medications/sildenafil-tablets-generic-viagra",
  "Oushk Pharmacy|Tadalafil": "https://www.oushkpharmacy.com/medications/tadalafil-tablets",
  "Oushk Pharmacy|Tadalafil Daily": "https://www.oushkpharmacy.com/medications/tadalafil-tablets-28/",

  // --- VivaMen ---
  "VivaMen|Sildenafil": "https://www.vivamen.co.uk",
  "VivaMen|Tadalafil": "https://www.vivamen.co.uk",
  "VivaMen|Tadalafil Daily": "https://www.vivamen.co.uk",
  "VivaMen|Spedra": "https://www.vivamen.co.uk",
  "VivaMen|Viagra Connect": "https://www.vivamen.co.uk",
  "VivaMen|Finasteride": "https://www.vivamen.co.uk",
  "VivaMen|Regaine Foam": "https://www.vivamen.co.uk",
  "VivaMen|Regaine Solution": "https://www.vivamen.co.uk",
  "VivaMen|Priligy": "https://www.vivamen.co.uk",
  "VivaMen|Mounjaro": "https://www.vivamen.co.uk",
  "VivaMen|Wegovy": "https://www.vivamen.co.uk",
  "VivaMen|Testogel": "https://www.vivamen.co.uk",
  "VivaMen|Tostran": "https://www.vivamen.co.uk",

  // --- VivaFem HRT ---
  "VivaFem|Oestrogel": "https://www.vivafem.co.uk",
  "VivaFem|Utrogestan": "https://www.vivafem.co.uk",
  "VivaFem|Lenzetto": "https://www.vivafem.co.uk",
  "VivaFem|Utrogestan + Oestrogel": "https://www.vivafem.co.uk",
  "Chemist4U|Oestrogel": "https://www.chemist-4-u.com/oestrogel-pump",
  "Chemist4U|Utrogestan": "https://www.chemist-4-u.com/utrogestan-100mcg-capsules",
  "Chemist4U|Lenzetto": "https://www.chemist-4-u.com/lenzetto-transdermal-spray",
  "Oxford Online Pharmacy|Oestrogel": "https://www.oxfordonlinepharmacy.co.uk/hormone-replacement-therapy/oestrogel",
  "Oxford Online Pharmacy|Utrogestan": "https://www.oxfordonlinepharmacy.co.uk/hormone-replacement-therapy/utrogestan-100mg-30-capsules",
  "Oxford Online Pharmacy|Lenzetto": "https://www.oxfordonlinepharmacy.co.uk/hormone-replacement-therapy/lenzetto-estradiol-1-53mg-transdermal-spray-solution-56-doses-8-1ml",
  "Oxford Online Pharmacy|Utrogestan + Oestrogel": "https://www.oxfordonlinepharmacy.co.uk/hormone-replacement-therapy/oestrogel-80g-plus-30-utrogestan-caps-100mg-monthly-combi-pack",
  "SimplyMeds Online|Oestrogel": "https://www.simplymedsonline.co.uk/menopause-hrt/oestrogel.html",
  "SimplyMeds Online|Utrogestan": "https://www.simplymedsonline.co.uk/menopause-hrt/utrogestan-capsules.html",
  "SimplyMeds Online|Lenzetto": "https://www.simplymedsonline.co.uk/menopause-hrt/lenzetto-spray.html",
  "The Independent Pharmacy|Oestrogel": "https://www.theindependentpharmacy.co.uk/menopause-hrt/oestrogel",
  "The Independent Pharmacy|Utrogestan": "https://www.theindependentpharmacy.co.uk/menopause-hrt/utrogestan-100mg-capsules",
  "The Independent Pharmacy|Lenzetto": "https://www.theindependentpharmacy.co.uk/menopause-hrt/lenzetto",
  "E-Surgery|Oestrogel": "https://e-surgery.com/product/oestrogel-pump-pack/",
  "E-Surgery|Utrogestan": "https://e-surgery.com/product/utrogestan-capsules/",
  "E-Surgery|Lenzetto": "https://e-surgery.com/product/lenzetto-spray/",
  "Pharmacy Planet|Oestrogel": "https://www.pharmacyplanet.com/oestrogel.html",
  "Pharmacy Planet|Lenzetto": "https://www.pharmacyplanet.com/lenzetto-spray.html",
  "The Family Chemist|Utrogestan": "https://www.thefamilychemist.co.uk/product/utrogestan-capsules/",
  "The Family Chemist|Lenzetto": "https://www.thefamilychemist.co.uk/product/lenzetto-spray/",
  "Click2Pharmacy|Utrogestan": "https://click2pharmacy.co.uk/product/utrogestan-100mg-capsules/",
  "Prescription Doctor|Oestrogel": "https://www.prescriptiondoctor.com/menopause/oestrogel",
  "Prescription Doctor|Utrogestan": "https://www.prescriptiondoctor.com/menopause/utrogestan",
  "Prescription Doctor|Utrogestan + Oestrogel": "https://www.prescriptiondoctor.com/menopause/oestrogel",
  "AccessDoctor|Oestrogel": "https://accessdoctor.co.uk/product/oestrogel-pump/",
  "Dock Pharmacy|Oestrogel": "https://www.dockpharmacy.com/product/oestrogel-80g/",
  "Dock Pharmacy|Utrogestan": "https://www.dockpharmacy.com/product/utrogestan-cap-100mg-30/",
  "Dock Pharmacy|Lenzetto": "https://www.dockpharmacy.com/product/lenzetto-estradiol-1-53mg-transdermal-spray/",
  "The Online Clinic|Oestrogel": "https://www.theonlineclinic.co.uk/oestrogel.asp",
  "The Online Clinic|Utrogestan": "https://www.theonlineclinic.co.uk/utrogestan.asp",
  "The Online Clinic|Lenzetto": "https://www.theonlineclinic.co.uk/lenzetto.asp",
  "Treated.com|Oestrogel": "https://uk.treated.com/hrt/oestrogel",
  "Treated.com|Utrogestan": "https://uk.treated.com/hrt/utrogestan",
  "Treated.com|Lenzetto": "https://uk.treated.com/hrt/lenzetto",
  "Treated.com|Utrogestan + Oestrogel": "https://uk.treated.com/hrt/utrogestan-and-oestrogel-pack",
  "Superdrug|Oestrogel": "https://onlinedoctor.superdrug.com/oestrogel.html",
  "Superdrug|Lenzetto": "https://onlinedoctor.superdrug.com/lenzetto-spray.html",
  "Boots|Oestrogel": "https://onlinedoctor.boots.com/HRT-treatment-online",
  "Boots|Lenzetto": "https://onlinedoctor.boots.com/HRT-treatment-online",
  "Boots|Utrogestan + Oestrogel": "https://onlinedoctor.boots.com/HRT-treatment-online",
  "MyPharmacy365|Utrogestan + Oestrogel": "https://mypharmacy365.co.uk/product/oestrogel_and_utrogestan_capsule_and_gel_combination.2210/",
  "Online Pharmacy4U|Lenzetto": "https://online-pharmacy4u.co.uk/products/lencetto-transdermal-1-53mg-spray",

  // Testosterone competitor URLs
  "Asda|Testogel": "https://onlinedoctor.asda.com/uk/testogel.html",
  "E-Surgery|Testogel": "https://e-surgery.com/product/testogel-sachets/",
  "Simple Online Pharmacy|Testogel": "https://www.simpleonlinepharmacy.co.uk/online-doctor/low-testosterone/testogel-sachets/",
  "Superdrug|Testogel": "https://onlinedoctor.superdrug.com/testogel-for-women.html",
  "PharmXtra|Testogel": "https://www.pharmxtra.com/testogel-sachets",
  "Clear Chemist|Tostran": "https://www.clearchemist.co.uk/tostran-gel.html",
  "Simple Online Pharmacy|Tostran": "https://www.simpleonlinepharmacy.co.uk/online-doctor/low-testosterone/tostran/",
  "E-Surgery|Tostran": "https://e-surgery.com/product/tostran-gel/",
  "Asda|Tostran": "https://onlinedoctor.asda.com/uk/tostran.html",
  "Superdrug|Tostran": "https://onlinedoctor.superdrug.com/tostran.html",

  // HRT extra product URLs
  "VivaFem|Lenzetto + Utrogestan": "https://www.vivafem.co.uk",
  "VivaFem|Estriol Cream": "https://www.vivafem.co.uk",
  "Pharmacy Online|Estriol Cream": "https://www.pharmacyonline.co.uk/estriol-cream",
  "The Independent Pharmacy|Estriol Cream": "https://www.theindependentpharmacy.co.uk/estriol-cream",
  "VivaFem|Imvaggis": "https://www.vivafem.co.uk",
  "E-Surgery|Imvaggis": "https://e-surgery.com/product/imvaggis/",
  "The Independent Pharmacy|Imvaggis": "https://www.theindependentpharmacy.co.uk/imvaggis",
  "VivaFem|Androfeme": "https://www.vivafem.co.uk",
  "Livewell Nationwide|Androfeme": "https://www.livewellnationwide.com/androfeme",
  "LIVVE|Androfeme": "https://www.livve.co.uk/androfeme",

  // VivaMen/VivaFem Test Kit URLs
  "VivaMen|Testosterone Test Kit": "https://www.vivamen.co.uk",
  "Medichecks|Testosterone Test Kit": "https://www.medichecks.com/products/testosterone-blood-test",
  "London Health Co|Testosterone Test Kit": "https://londonhealthcompany.co.uk/products/testosterone-blood-test",
  "OneDayTests|Testosterone Test Kit": "https://onedaytests.com/products/testosterone-blood-test",
  "Optimale|Testosterone Test Kit": "https://www.optimale.co.uk/product/testosterone-blood-test/",
  "Voy (was Manual)|Testosterone Test Kit": "https://www.joinvoy.com/trt/how-it-works",
  "Welzo|Testosterone Test Kit": "https://welzo.com/products/testosterone-blood-test",
  "Cloud Pharmacy|Testosterone Test Kit": "https://www.cloudpharmacy.co.uk/medications/testosterone-test-kit/",
  "Forth|Testosterone Test Kit": "https://www.forthwithlife.co.uk/products/testosterone-home-blood-test-kit/",
  "SimplyMeds|Testosterone Test Kit": "https://www.simplymedsonline.co.uk/mens-health-otc/testosterone-home-blood-test-kit.html",
  "Randox Health|Testosterone Test Kit": "https://randoxhealth.com/en-GB/product/home/male-hormone-quickdraw",
  "ZAVA|Testosterone Test Kit": "https://www.zavamed.com/uk/testosterone-test-kit.html",
  "Superdrug|Testosterone Test Kit": "https://onlinedoctor.superdrug.com/testosterone-test-kit.html",
  "Thriva|Testosterone Test Kit": "https://thriva.co/shop/blood-tests/testosterone-blood-test",
  "Numan|Testosterone Test Kit": "https://www.numan.com/diagnostics/testosterone-blood-test",
  "OneDayTests (TRT)|Testosterone Test Kit": "https://onedaytests.com/products/ultimate-trt-blood-test",
  "VivaFem|Menopause Confirmation Panel": "https://www.vivafem.co.uk",
  "VivaFem|Female Hormone Test Kit": "https://www.vivafem.co.uk",

  // Test Kit URLs
  "E-Pharmacy|Chlamydia Test Kit": "https://e-pharmacy.co.uk/product/gonorrhoea-and-chlamydia-home-test-kit/",
  "Dr Fox|Chlamydia Test Kit": "https://www.doctorfox.co.uk/chlamydia/postal-test-kit.html",
  "Simple Online Pharmacy|Chlamydia Test Kit": "https://www.simpleonlinepharmacy.co.uk/online-doctor/testing-kits/chlamydia-test/",
  "Chemist Click|Chlamydia Test Kit": "https://www.chemistclick.co.uk/sti-test-kit",
  "LloydsPharmacy|Chlamydia Test Kit": "https://onlinedoctor.lloydspharmacy.com/uk/sti-tests",
  "Medicines2U|Chlamydia Test Kit": "https://www.medicines2u.co.uk/online-doctor/chlamydia-treatment/chlamydia-gonorrhoea-std-sti-home-test-kit/",
  "Boots|Chlamydia Test Kit": "https://onlinedoctor.boots.com/chlamydia-women",
  "Superdrug|Chlamydia Test Kit": "https://onlinedoctor.superdrug.com/chlamydia-test-kit.html",
  "Cloud Pharmacy|Chlamydia Test Kit": "https://www.cloudpharmacy.co.uk/medications/sti-test-kit/",
  "Simple Online Pharmacy|Gonorrhoea Test Kit": "https://www.simpleonlinepharmacy.co.uk/online-doctor/testing-kits/gonorrhoea-test-kit/",
  "LloydsPharmacy|Gonorrhoea Test Kit": "https://onlinedoctor.lloydspharmacy.com/uk/sti-tests",
  "Chemist Click|Gonorrhoea Test Kit": "https://www.chemistclick.co.uk/sti-test-kit",
  "Asda|Gonorrhoea Test Kit": "https://onlinedoctor.asda.com/uk/oral-chlamydia-gonorrhea-test-kit.html",
  "Cloud Pharmacy|Gonorrhoea Test Kit": "https://www.cloudpharmacy.co.uk/medications/sti-test-kit/",
  "The Independent Pharmacy|Gonorrhoea Test Kit": "https://www.theindependentpharmacy.co.uk/chlamydia/chlamydia-gonorrhoea-test-kit",
  "Superdrug|Gonorrhoea Test Kit": "https://onlinedoctor.superdrug.com/chlamydia-gonorrhoea-test-kit.html",
  "Boots|Gonorrhoea Test Kit": "https://onlinedoctor.boots.com/sti-home-test-kit",
  "Better2Know|Gonorrhoea Test Kit": "https://www.better2know.co.uk/shop/products/home-testing-kits/chlamydia-and-gonorrhoea-test",
  "Medicines Online|Gonorrhoea Test Kit": "https://medicinesonline.org.uk/product/sti-std-test-chlamydia-ureaplasma-gonorrhoea-home-kit/",
  "Boots (Canestest)|BV Test Kit": "https://www.boots.com/canestest-self-test-for-vaginal-infections-10202183",
  "HomeHealth UK|BV Test Kit": "https://homehealth-uk.com/all-products/bacterial-vaginosis-bv-and-thrush-ph-rapid-test-devices/",
  "The Family Chemist|BV Test Kit": "https://www.thefamilychemist.co.uk/product/bacterial-vaginosis-self-testing/",
  "YourPharmacy|BV Test Kit": "https://yourpharmacy.uk/product/vaginal-infection/",
  "The Independent Pharmacy|BV Test Kit": "https://www.theindependentpharmacy.co.uk/bacterial-vaginosis-bv/canestest",
  "HomeDiagnostics|BV Test Kit": "https://www.homediagnostics.co.uk/tests/sexual-health/bacterial-vaginosis-test",
  "Mayfield Clinic|BV Test Kit": "https://www.mayfieldclinic.co.uk/products/at-home-vaginitis-bv-swab-test-kit-self-collect",
  "Randox Health|Female Hormone Test Kit": "https://randoxhealth.com/en-GB/product/home/female-hormone-Quickdraw",
  "Welzo|Female Hormone Test Kit": "https://welzo.com/products/female-hormone-blood-test",
  "Vitall|Female Hormone Test Kit": "https://vitall.co.uk/test/menopause-hormones",
  "OneDayTests|Female Hormone Test Kit": "https://onedaytests.com/collections/female-hormone-blood-tests",
  "Medichecks|Female Hormone Test Kit": "https://www.medichecks.com/products/female-hormone-check-blood-test",
  "Forth|Female Hormone Test Kit": "https://www.forthwithlife.co.uk/products/female-hormone-home-blood-test-kit/",
  "Thriva|Female Hormone Test Kit": "https://thriva.co/shop/womens-health-test-packages/womens-hormones-blood-test-insights",
  "Forth (Menopause)|Female Hormone Test Kit": "https://www.forthwithlife.co.uk/products/menopause-home-blood-test-kit/",
  "Mayfield Clinic|Female Hormone Test Kit": "https://www.mayfieldclinic.co.uk/home-test-kit-category/hormone-reproductive-health",
  "VivaMen|Minoxidil Oral": "https://www.vivamen.co.uk",
  "VivaMen|Minoxidil + Finasteride Solution": "https://www.vivamen.co.uk",

  // --- Pharmica Weight Loss ---
  "Pharmica|Mounjaro": "https://www.pharmica.co.uk/weight-loss/mounjaro/",
  "Pharmica|Wegovy": "https://www.pharmica.co.uk/weight-loss/wegovy/",

  // --- Numan Weight Loss + ED extras ---
  "Numan|Mounjaro": "https://www.numan.com/weight-loss",
  "Numan|Wegovy": "https://www.numan.com/weight-loss",
  "Numan|Viagra Connect": "https://www.numan.com/erectile-dysfunction",
  "Numan|Tadalafil Daily": "https://www.numan.com/erectile-dysfunction",

  // --- Oushk Weight Loss + Hair Loss ---
  "Oushk Pharmacy|Mounjaro": "https://www.oushkpharmacy.com/medications/mounjaro",
  "Oushk Pharmacy|Wegovy": "https://www.oushkpharmacy.com/medications/wegovy-semaglutide-weight-loss-injection",
  "Oushk Pharmacy|Finasteride": "https://www.oushkpharmacy.com/medications/finasteride-tablets-generic-propecia",

  // --- Manual ---
  "Manual|Finasteride": "https://www.manual.co/hair-loss/finasteride",

  // --- Lloyds Pharmacy ---
  "Lloyds Pharmacy|Sildenafil": "https://onlinedoctor.lloydspharmacy.com/uk/erectile-dysfunction/sildenafil",
  "Lloyds Pharmacy|Tadalafil": "https://onlinedoctor.lloydspharmacy.com/uk/erectile-dysfunction/tadalafil",
  "Lloyds Pharmacy|Tadalafil Daily": "https://onlinedoctor.lloydspharmacy.com/uk/erectile-dysfunction/tadalafil-daily",
  "Lloyds Pharmacy|Spedra": "https://onlinedoctor.lloydspharmacy.com/uk/erectile-dysfunction/spedra",
  "Lloyds Pharmacy|Viagra Connect": "https://onlinedoctor.lloydspharmacy.com/uk/erectile-dysfunction/viagra-connect",
  "Lloyds Pharmacy|Priligy": "https://onlinedoctor.lloydspharmacy.com/uk/premature-ejaculation/priligy-dapoxetine",
  "Lloyds Pharmacy|Finasteride": "https://onlinedoctor.lloydspharmacy.com/uk/hair-loss/finasteride",
  "Lloyds Pharmacy|Mounjaro": "https://onlinedoctor.lloydspharmacy.com/uk/weight-loss/mounjaro",
  "Lloyds Pharmacy|Wegovy": "https://onlinedoctor.lloydspharmacy.com/uk/weight-loss/wegovy",

  // --- Boots ---
  "Boots|Sildenafil": "https://onlinedoctor.boots.com/erectile-dysfunction",
  "Boots|Tadalafil": "https://onlinedoctor.boots.com/erectile-dysfunction",
  "Boots|Tadalafil Daily": "https://onlinedoctor.boots.com/erectile-dysfunction",
  "Boots|Spedra": "https://onlinedoctor.boots.com/erectile-dysfunction",
  "Boots|Viagra Connect": "https://onlinedoctor.boots.com/erectile-dysfunction",
  "Boots|Finasteride": "https://onlinedoctor.boots.com/propecia-online",
  "Boots|Mounjaro": "https://onlinedoctor.boots.com/treatments/mounjaro",
  "Boots|Wegovy": "https://onlinedoctor.boots.com/treatments/wegovy",

  // --- The Independent Pharmacy ---
  "The Independent Pharmacy|Sildenafil": "https://www.theindependentpharmacy.co.uk/erectile-dysfunction-ed/sildenafil-tablets",
  "The Independent Pharmacy|Tadalafil": "https://www.theindependentpharmacy.co.uk/erectile-dysfunction-ed/tadalafil",
  "The Independent Pharmacy|Tadalafil Daily": "https://www.theindependentpharmacy.co.uk/erectile-dysfunction-ed/tadalafil-once-daily-tablets",
  "The Independent Pharmacy|Spedra": "https://www.theindependentpharmacy.co.uk/erectile-dysfunction-ed/spedra-tablets",
  "The Independent Pharmacy|Viagra Connect": "https://www.theindependentpharmacy.co.uk/erectile-dysfunction-ed/viagra-connect",
  "The Independent Pharmacy|Finasteride": "https://www.theindependentpharmacy.co.uk/hair-loss/finasteride-1mg-tablets-generic-propecia-tablets",
  "The Independent Pharmacy|Priligy": "https://www.theindependentpharmacy.co.uk/premature-ejaculation/priligy",
  "The Independent Pharmacy|Mounjaro": "https://www.theindependentpharmacy.co.uk/weight-loss/mounjaro-injections",
  "The Independent Pharmacy|Wegovy": "https://www.theindependentpharmacy.co.uk/weight-loss/wegovy-injections",

  // --- Oxford Online Pharmacy ---
  "Oxford Online Pharmacy|Sildenafil": "https://www.oxfordonlinepharmacy.co.uk/erectile-dysfunction/sildenafil",
  "Oxford Online Pharmacy|Tadalafil": "https://www.oxfordonlinepharmacy.co.uk/erectile-dysfunction/tadalafil-tablets",
  "Oxford Online Pharmacy|Tadalafil Daily": "https://www.oxfordonlinepharmacy.co.uk/erectile-dysfunction/tadalafil-tablets",
  "Oxford Online Pharmacy|Spedra": "https://www.oxfordonlinepharmacy.co.uk/erectile-dysfunction/spedra",
  "Oxford Online Pharmacy|Viagra Connect": "https://www.oxfordonlinepharmacy.co.uk/erectile-dysfunction/viagra-connect",
  "Oxford Online Pharmacy|Finasteride": "https://www.oxfordonlinepharmacy.co.uk/hair-loss/finasteride",
  "Oxford Online Pharmacy|Mounjaro": "https://www.oxfordonlinepharmacy.co.uk/weight-loss/mounjaro",
  "Oxford Online Pharmacy|Wegovy": "https://www.oxfordonlinepharmacy.co.uk/weight-loss/wegovy",

  // --- Simple Online Pharmacy ---
  "Simple Online Pharmacy|Sildenafil": "https://www.simpleonlinepharmacy.co.uk/online-doctor/erectile-dysfunction/sildenafil/",
  "Simple Online Pharmacy|Tadalafil": "https://www.simpleonlinepharmacy.co.uk/online-doctor/erectile-dysfunction/tadalafil/",
  "Simple Online Pharmacy|Tadalafil Daily": "https://www.simpleonlinepharmacy.co.uk/online-doctor/erectile-dysfunction/tadalafil/",
  "Simple Online Pharmacy|Spedra": "https://www.simpleonlinepharmacy.co.uk/online-doctor/erectile-dysfunction/spedra/",
  "Simple Online Pharmacy|Finasteride": "https://www.simpleonlinepharmacy.co.uk/online-doctor/hair-loss/finasteride/",
  "Simple Online Pharmacy|Priligy": "https://www.simpleonlinepharmacy.co.uk/online-doctor/premature-ejaculation/priligy/",
  "Simple Online Pharmacy|Mounjaro": "https://www.simpleonlinepharmacy.co.uk/online-doctor/weight-loss/mounjaro/",
  "Simple Online Pharmacy|Wegovy": "https://www.simpleonlinepharmacy.co.uk/online-doctor/weight-loss/wegovy/",
};

// Helper to get source URL for a pricing entry
function getSourceUrl(entry) {
  return SOURCE_URLS[entry.competitor + '|' + entry.product] || null;
}

const PRICING_DATA = {
  metadata: {
    lastUpdated: "2026-03-22",
    currency: "GBP",
    sources: [
      { competitor: "Pharmica", url: "https://www.pharmica.co.uk", method: "Direct scrape" },
      { competitor: "Doctor Fox", url: "https://www.doctorfox.co.uk", method: "Direct scrape" },
      { competitor: "Numan", url: "https://www.numan.com", method: "Direct scrape (from prices)" },
      { competitor: "Pharmacy Online", url: "https://www.pharmacyonline.co.uk", method: "Direct scrape" },
      { competitor: "Hims UK", url: "https://www.forhims.co.uk", method: "Blog pages + comparison sites" },
      { competitor: "Manual", url: "https://www.manual.co", method: "Pricing spreadsheet" },
      { competitor: "Lloyds Pharmacy", url: "https://onlinedoctor.lloydspharmacy.com", method: "Direct scrape" },
      { competitor: "Boots", url: "https://onlinedoctor.boots.com", method: "Direct scrape" },
      { competitor: "The Independent Pharmacy", url: "https://www.theindependentpharmacy.co.uk", method: "Direct scrape" },
      { competitor: "Oxford Online Pharmacy", url: "https://www.oxfordonlinepharmacy.co.uk", method: "Direct scrape" },
      { competitor: "Simple Online Pharmacy", url: "https://www.simpleonlinepharmacy.co.uk", method: "Direct scrape" },
      { competitor: "VivaMen", url: "https://www.vivamen.co.uk", method: "Internal pricing strategy" }
    ]
  },

  competitors: {
    "Pharmica": {
      model: "Pharmacy + subscription hybrid",
      consultationFee: "Free (included)",
      subscription: "Optional — 10% off + free shipping",
      delivery: "£3.49 standard, free on subscription",
      notes: "Traditional pharmacy + subscription hybrid. Pause/cancel anytime."
    },
    "Doctor Fox": {
      model: "Traditional online doctor",
      consultationFee: "Prescription fee: £1-£4 based on order value",
      subscription: "No subscription model",
      delivery: "£2.90 per order (Royal Mail Tracked 24)",
      notes: "Separate prescription fee + delivery added to all orders. Often cheapest base prices."
    },
    "Numan": {
      model: "DTC subscription-first",
      consultationFee: "Free",
      subscription: "Subscription only, 50% off first month",
      delivery: "Free",
      notes: "Subscription-only model. Prices shown are 'from' prices. Actual pricing behind consultation."
    },
    "Hims UK": {
      model: "DTC subscription-first",
      consultationFee: "Free",
      subscription: "Subscription only",
      delivery: "Free",
      notes: "Subscription-only. Per-dose pricing. Consultation-first model."
    },
    "Manual": {
      model: "DTC subscription-first",
      consultationFee: "Free",
      subscription: "Subscription only",
      delivery: "Free",
      notes: "Subscription-only model. Pricing behind consultation."
    },
    "Pharmacy Online": {
      model: "Traditional online pharmacy",
      consultationFee: "Included",
      subscription: "No subscription",
      delivery: "Standard delivery",
      notes: "Offers interest-free payments via Super Credit. Some products out of stock."
    },
    "Oushk Pharmacy": {
      model: "Traditional pharmacy online",
      consultationFee: "Included",
      subscription: "No subscription",
      delivery: "Standard + tracked",
      notes: "Offers Klarna/Clearpay interest-free payments. Spring promo: £15 off orders over £100."
    },
    "Lloyds Pharmacy": {
      model: "Traditional online doctor + subscription",
      consultationFee: "Included (except weight loss: £99.99 / £69.99 with code)",
      subscription: "Optional — ~15% off",
      delivery: "Free standard (5-7 days), free same-day pharmacy collection, £4.95 next-day",
      notes: "Largest UK pharmacy chain. Online doctor service via onlinedoctor.lloydspharmacy.com."
    },
    "Boots": {
      model: "Traditional online doctor",
      consultationFee: "Included",
      subscription: "No subscription",
      delivery: "Free standard, £4.95 next-day, click & collect at Boots stores",
      notes: "Major high-street pharmacy. Online doctor via onlinedoctor.boots.com. Same prices as Lloyds for many products."
    },
    "The Independent Pharmacy": {
      model: "Online pharmacy",
      consultationFee: "Included",
      subscription: "No subscription",
      delivery: "Free delivery on orders over £40, otherwise standard rates",
      notes: "Competitive pricing, especially on generics. Wide range of pack sizes."
    },
    "Oxford Online Pharmacy": {
      model: "Online pharmacy",
      consultationFee: "Included",
      subscription: "No subscription",
      delivery: "£2.99 standard, free on larger packs. 1-3 business days.",
      notes: "Very competitive pricing. Near-identical to The Independent Pharmacy on many products."
    },
    "Simple Online Pharmacy": {
      model: "Online pharmacy",
      consultationFee: "Included",
      subscription: "No subscription",
      delivery: "Standard delivery included",
      notes: "Competitive pricing on generics. Also offers Oral Minoxidil, Dutasteride for hair loss."
    },
    "VivaMen": {
      model: "Pharmacy + subscription hybrid",
      consultationFee: "Free (included)",
      subscription: "Optional — 10% off + free delivery. First order 20% off.",
      delivery: "Free on subscription",
      notes: "6-month consultation window for POM. Up to 12-month for P medicines."
    }
  },

  // All prices in the products array
  products: [
    // ============================================================
    // SILDENAFIL (Generic Viagra) — ED
    // ============================================================

    // --- Pharmica Sildenafil 25mg One-Time ---
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 2, price: 7.99, perUnit: 4.00, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 4, price: 9.99, perUnit: 2.50, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 8, price: 19.99, perUnit: 2.50, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 12, price: 28.99, perUnit: 2.42, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 16, price: 34.99, perUnit: 2.19, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 24, price: 45.49, perUnit: 1.90, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 32, price: 53.99, perUnit: 1.69, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 64, price: 63.36, perUnit: 0.99, purchaseType: "one-time", brand: "Generic" },

    // --- Pharmica Sildenafil 25mg Subscription ---
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 8, price: 17.99, perUnit: 2.25, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 12, price: 26.09, perUnit: 2.17, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 16, price: 31.49, perUnit: 1.97, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 24, price: 40.94, perUnit: 1.71, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 32, price: 48.59, perUnit: 1.52, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 64, price: 57.02, perUnit: 0.89, purchaseType: "subscription", brand: "Generic" },

    // --- Pharmica Sildenafil 50mg One-Time ---
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 2, price: 9.99, perUnit: 5.00, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 14.99, perUnit: 3.75, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 26.99, perUnit: 3.37, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 12, price: 35.99, perUnit: 3.00, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 44.99, perUnit: 2.81, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 24, price: 62.99, perUnit: 2.62, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 32, price: 80.99, perUnit: 2.53, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 64, price: 125.99, perUnit: 1.97, purchaseType: "one-time", brand: "Generic" },

    // --- Pharmica Sildenafil 50mg Subscription ---
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 24.29, perUnit: 3.04, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 12, price: 32.39, perUnit: 2.70, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 40.49, perUnit: 2.53, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 24, price: 56.69, perUnit: 2.36, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 32, price: 72.89, perUnit: 2.28, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 64, price: 113.39, perUnit: 1.77, purchaseType: "subscription", brand: "Generic" },

    // --- Pharmica Sildenafil 100mg One-Time ---
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 2, price: 10.99, perUnit: 5.50, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 16.99, perUnit: 4.25, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 29.99, perUnit: 3.75, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 49.99, perUnit: 3.12, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 24, price: 69.99, perUnit: 2.92, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 32, price: 89.99, perUnit: 2.81, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 64, price: 139.99, perUnit: 2.19, purchaseType: "one-time", brand: "Generic" },

    // --- Pharmica Sildenafil 100mg Subscription ---
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 26.99, perUnit: 3.37, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 44.99, perUnit: 2.81, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 24, price: 62.99, perUnit: 2.62, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 32, price: 80.99, perUnit: 2.53, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 64, price: 125.99, perUnit: 1.97, purchaseType: "subscription", brand: "Generic" },

    // --- Doctor Fox Sildenafil (note: +prescription fee £1-4 + £2.90 delivery) ---
    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 4, price: 3.20, perUnit: 0.80, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 8, price: 7.45, perUnit: 0.93, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 16, price: 12.50, perUnit: 0.78, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 32, price: 22.00, perUnit: 0.69, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 64, price: 41.00, perUnit: 0.64, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },

    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 3.50, perUnit: 0.88, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 9.80, perUnit: 1.23, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 19.50, perUnit: 1.22, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 32, price: 36.00, perUnit: 1.13, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 64, price: 45.00, perUnit: 0.70, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },

    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 4.50, perUnit: 1.13, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 9.50, perUnit: 1.19, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 22.00, perUnit: 1.38, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 32, price: 36.00, perUnit: 1.13, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 64, price: 61.00, perUnit: 0.95, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },

    // --- Numan Sildenafil (listed price on category page) ---
    { competitor: "Numan", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: null, price: null, perUnit: 1.17, purchaseType: "subscription", brand: "Generic", notes: "£1.17/tablet listed price. Subscription only. 50% off first month (max £35)." },
    { competitor: "Numan", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: null, price: null, perUnit: 1.17, purchaseType: "subscription", brand: "Generic", notes: "£1.17/tablet listed price. Subscription only." },
    // --- Numan Viagra Connect ---
    { competitor: "Numan", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: null, price: null, perUnit: 6.04, purchaseType: "one-time", brand: "Branded", notes: "£6.04/tablet listed price. OTC product." },

    // --- Hims UK Sildenafil ---
    // --- Hims UK Sildenafil (actual product page price £2.36/dose) ---
    { competitor: "Hims UK", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: null, price: null, perUnit: 2.36, purchaseType: "subscription", brand: "Generic", notes: "£2.36/dose. Subscription only. Free delivery." },
    { competitor: "Hims UK", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: null, price: null, perUnit: 2.36, purchaseType: "subscription", brand: "Generic", notes: "£2.36/dose. Subscription only." },
    // --- Hims UK Viagra Connect ---
    { competitor: "Hims UK", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: null, price: null, perUnit: 5.83, purchaseType: "one-time", brand: "Branded", notes: "£5.83/dose. Free next-day delivery." },

    // --- Manual Sildenafil ---
    // --- Manual Sildenafil (£24/month subscription, £15 first month) ---
    { competitor: "Manual", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: null, price: 24.00, perUnit: null, purchaseType: "subscription", brand: "Generic", unit: "month supply", notes: "£24/month subscription (£15 first month). Includes clinician support." },

    // --- Pharmacy Online Sildenafil ---
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 4, price: 5.89, perUnit: 1.47, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 8, price: 9.49, perUnit: 1.19, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 12, price: 14.95, perUnit: 1.25, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 16, price: 17.19, perUnit: 1.07, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 24, price: 24.95, perUnit: 1.04, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 32, price: 32.49, perUnit: 1.02, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 48, price: 40.95, perUnit: 0.85, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 64, price: 45.50, perUnit: 0.71, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 7.49, perUnit: 1.87, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 13.89, perUnit: 1.74, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 12, price: 19.99, perUnit: 1.67, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 24.99, perUnit: 1.56, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 24, price: 38.99, perUnit: 1.62, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 32, price: 47.99, perUnit: 1.50, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 48, price: 58.99, perUnit: 1.23, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 64, price: 64.94, perUnit: 1.01, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 8.19, perUnit: 2.05, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 15.24, perUnit: 1.91, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 12, price: 22.99, perUnit: 1.92, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 25.99, perUnit: 1.62, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 24, price: 39.99, perUnit: 1.67, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 32, price: 49.95, perUnit: 1.56, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 48, price: 69.99, perUnit: 1.46, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 64, price: 91.99, perUnit: 1.44, purchaseType: "one-time", brand: "Generic", unit: "tablet" },

    // --- VivaMen Sildenafil (from latest CSV) ---
    { competitor: "VivaMen", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 8.99, perUnit: 2.25, purchaseType: "one-time", brand: "Generic" },
    { competitor: "VivaMen", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 16.99, perUnit: 2.12, purchaseType: "one-time", brand: "Generic" },
    { competitor: "VivaMen", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 9.99, perUnit: 2.50, purchaseType: "one-time", brand: "Generic" },
    { competitor: "VivaMen", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 18.99, perUnit: 2.37, purchaseType: "one-time", brand: "Generic" },

    // --- VivaMen Viagra Connect (P medicine, inc VAT) ---
    { competitor: "VivaMen", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 26.99, perUnit: 6.75, purchaseType: "one-time", brand: "Branded" },
    { competitor: "VivaMen", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 44.99, perUnit: 5.62, purchaseType: "one-time", brand: "Branded" },

    // ============================================================
    // VIAGRA CONNECT (P Medicine) — ED
    // ============================================================

    // --- Pharmica Viagra Connect 50mg ---
    { competitor: "Pharmica", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 9.99, perUnit: 2.50, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 19.99, perUnit: 2.50, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 67.99, perUnit: 4.25, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 32, price: 131.99, perUnit: 4.12, purchaseType: "one-time", brand: "Branded" },

    // --- Doctor Fox Viagra Connect 50mg ---
    { competitor: "Doctor Fox", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 16.00, perUnit: 4.00, purchaseType: "one-time", brand: "Branded", notes: "+£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 32.00, perUnit: 4.00, purchaseType: "one-time", brand: "Branded", notes: "+£2.90 delivery" },

    // ============================================================
    // TADALAFIL (Generic Cialis) — ED On-Demand
    // ============================================================

    // --- Pharmica Tadalafil 10mg One-Time ---
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 4, price: 19.99, perUnit: 5.00, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 8, price: 29.99, perUnit: 3.75, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 16, price: 49.99, perUnit: 3.12, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 24, price: 69.99, perUnit: 2.92, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 32, price: 89.99, perUnit: 2.81, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 64, price: 139.99, perUnit: 2.19, purchaseType: "one-time", brand: "Generic" },

    // --- Pharmica Tadalafil 10mg Subscription ---
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 8, price: 26.99, perUnit: 3.37, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 16, price: 44.99, perUnit: 2.81, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 24, price: 62.99, perUnit: 2.62, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 32, price: 80.99, perUnit: 2.53, purchaseType: "subscription", brand: "Generic" },
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 64, price: 125.99, perUnit: 1.97, purchaseType: "subscription", brand: "Generic" },

    // --- Pharmica Tadalafil 20mg One-Time (same price as 10mg) ---
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 4, price: 19.99, perUnit: 5.00, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 8, price: 29.99, perUnit: 3.75, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 16, price: 49.99, perUnit: 3.12, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 64, price: 139.99, perUnit: 2.19, purchaseType: "one-time", brand: "Generic" },

    // --- Doctor Fox Tadalafil 10mg ---
    { competitor: "Doctor Fox", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 4, price: 6.90, perUnit: 1.73, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 8, price: 12.50, perUnit: 1.56, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 16, price: 20.50, perUnit: 1.28, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 24, price: 31.50, perUnit: 1.31, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 32, price: 39.00, perUnit: 1.22, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },

    // --- Doctor Fox Tadalafil 20mg ---
    { competitor: "Doctor Fox", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 4, price: 7.50, perUnit: 1.88, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 8, price: 12.00, perUnit: 1.50, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 16, price: 21.00, perUnit: 1.31, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 32, price: 40.00, perUnit: 1.25, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },

    // --- Numan Tadalafil ---
    { competitor: "Numan", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: null, price: null, perUnit: 1.42, purchaseType: "subscription", brand: "Generic", notes: "£1.42/tablet listed price. Subscription only. 50% off first month (max £35)." },
    { competitor: "Numan", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: null, price: null, perUnit: 1.42, purchaseType: "subscription", brand: "Generic", notes: "£1.42/tablet listed price. Subscription only." },
    // --- Numan Tadalafil Daily ---
    { competitor: "Numan", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: null, price: null, perUnit: 1.42, purchaseType: "subscription", brand: "Generic", notes: "£1.42/tablet listed price. Subscription only." },
    { competitor: "Numan", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: null, price: null, perUnit: 1.42, purchaseType: "subscription", brand: "Generic", notes: "£1.42/tablet listed price. Subscription only." },

    // --- Hims UK Tadalafil ---
    // --- Hims UK Tadalafil (actual product page price £2.36/dose) ---
    { competitor: "Hims UK", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: null, price: null, perUnit: 2.36, purchaseType: "subscription", brand: "Generic", notes: "£2.36/dose. Subscription only." },
    { competitor: "Hims UK", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: null, price: null, perUnit: 2.36, purchaseType: "subscription", brand: "Generic", notes: "£2.36/dose. Subscription only." },
    // --- Hims UK Tadalafil Daily ---
    { competitor: "Hims UK", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: null, price: null, perUnit: 2.36, purchaseType: "subscription", brand: "Generic", notes: "£2.36/dose. Daily subscription." },

    // --- Manual Tadalafil ---
    // --- Manual Tadalafil (£24/month subscription, £15 first month) ---
    { competitor: "Manual", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: null, price: 24.00, perUnit: null, purchaseType: "subscription", brand: "Generic", unit: "month supply", notes: "£24/month subscription (£15 first month). Includes clinician support." },

    // --- Pharmacy Online Tadalafil ---
    { competitor: "Pharmacy Online", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 4, price: 10.99, perUnit: 2.75, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 8, price: 18.99, perUnit: 2.37, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 12, price: 28.99, perUnit: 2.42, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 16, price: 34.99, perUnit: 2.19, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 32, price: 65.99, perUnit: 2.06, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 64, price: 130.99, perUnit: 2.05, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 4, price: 11.99, perUnit: 3.00, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 8, price: 21.99, perUnit: 2.75, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 12, price: 29.99, perUnit: 2.50, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 16, price: 36.99, perUnit: 2.31, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 32, price: 73.99, perUnit: 2.31, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 64, price: 137.99, perUnit: 2.16, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    // --- Pharmacy Online Tadalafil Daily ---
    { competitor: "Pharmacy Online", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 28, price: 25.99, perUnit: 0.93, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 56, price: 45.99, perUnit: 0.82, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 84, price: 67.99, perUnit: 0.81, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 28, price: 28.99, perUnit: 1.04, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 56, price: 55.99, perUnit: 1.00, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 84, price: 74.99, perUnit: 0.89, purchaseType: "one-time", brand: "Generic", unit: "tablet" },

    // --- VivaMen Tadalafil On-Demand (from latest CSV) ---
    { competitor: "VivaMen", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 4, price: 17.99, perUnit: 4.50, purchaseType: "one-time", brand: "Generic" },
    { competitor: "VivaMen", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 8, price: 29.99, perUnit: 3.75, purchaseType: "one-time", brand: "Generic" },
    { competitor: "VivaMen", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 4, price: 17.99, perUnit: 4.50, purchaseType: "one-time", brand: "Generic" },
    { competitor: "VivaMen", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 8, price: 29.99, perUnit: 3.75, purchaseType: "one-time", brand: "Generic" },

    // ============================================================
    // TADALAFIL DAILY — ED
    // ============================================================

    // --- Pharmica Tadalafil Daily 5mg ---
    { competitor: "Pharmica", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 28, price: 34.99, perUnit: 1.25, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 56, price: 69.99, perUnit: 1.25, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Pharmica", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 84, price: 99.99, perUnit: 1.19, purchaseType: "one-time", brand: "Generic" },

    // --- Pharmica Tadalafil Daily 2.5mg ---
    { competitor: "Pharmica", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 28, price: 34.99, perUnit: 1.25, purchaseType: "one-time", brand: "Generic" },

    // --- Doctor Fox Tadalafil Daily 2.5mg ---
    { competitor: "Doctor Fox", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 28, price: 18.00, perUnit: 0.64, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 56, price: 36.00, perUnit: 0.64, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },

    // --- Oushk Tadalafil Daily 2.5mg ---
    // Already added above

    // --- Doctor Fox Tadalafil Daily ---
    { competitor: "Doctor Fox", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 28, price: 17.00, perUnit: 0.61, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 56, price: 33.00, perUnit: 0.59, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 84, price: 43.00, perUnit: 0.51, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 140, price: 75.00, perUnit: 0.54, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },

    // --- VivaMen Tadalafil Daily (from latest CSV) ---
    { competitor: "VivaMen", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 28, price: 29.99, perUnit: 1.07, purchaseType: "one-time", brand: "Generic" },
    { competitor: "VivaMen", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 28, price: 32.99, perUnit: 1.18, purchaseType: "one-time", brand: "Generic" },

    // ============================================================
    // SPEDRA (Avanafil) — ED
    // ============================================================

    // --- Pharmica Spedra ---
    { competitor: "Pharmica", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 24.99, perUnit: 6.25, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 49.99, perUnit: 6.25, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 85.99, perUnit: 5.37, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 28.99, perUnit: 7.25, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 54.99, perUnit: 6.87, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 99.99, perUnit: 6.25, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 4, price: 36.99, perUnit: 9.25, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 8, price: 69.99, perUnit: 8.75, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 16, price: 134.99, perUnit: 8.44, purchaseType: "one-time", brand: "Branded" },

    // --- Doctor Fox Spedra ---
    { competitor: "Doctor Fox", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 16.50, perUnit: 4.13, purchaseType: "one-time", brand: "Branded", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 28.00, perUnit: 3.50, purchaseType: "one-time", brand: "Branded", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 49.50, perUnit: 3.09, purchaseType: "one-time", brand: "Branded", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 19.50, perUnit: 4.88, purchaseType: "one-time", brand: "Branded", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 37.00, perUnit: 4.63, purchaseType: "one-time", brand: "Branded", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 68.00, perUnit: 4.25, purchaseType: "one-time", brand: "Branded", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 4, price: 29.50, perUnit: 7.38, purchaseType: "one-time", brand: "Branded", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 8, price: 54.50, perUnit: 6.81, purchaseType: "one-time", brand: "Branded", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 16, price: 98.00, perUnit: 6.13, purchaseType: "one-time", brand: "Branded", notes: "+prescription fee +£2.90 delivery" },

    // --- Pharmacy Online Spedra ---
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 19.99, perUnit: 5.00, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 29.99, perUnit: 3.75, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 12, price: 39.99, perUnit: 3.33, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 49.99, perUnit: 3.12, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 32, price: 94.99, perUnit: 2.97, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 20.99, perUnit: 5.25, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 39.99, perUnit: 5.00, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 12, price: 57.99, perUnit: 4.83, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 74.99, perUnit: 4.69, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 32, price: 134.99, perUnit: 4.22, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 4, price: 29.99, perUnit: 7.50, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 8, price: 57.99, perUnit: 7.25, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 12, price: 76.99, perUnit: 6.42, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 16, price: 99.99, perUnit: 6.25, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 32, price: 184.99, perUnit: 5.78, purchaseType: "one-time", brand: "Branded", unit: "tablet" },

    // --- VivaMen Spedra (from latest CSV) ---
    { competitor: "VivaMen", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 24.99, perUnit: 6.25, purchaseType: "one-time", brand: "Branded" },
    { competitor: "VivaMen", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 47.99, perUnit: 6.00, purchaseType: "one-time", brand: "Branded" },
    { competitor: "VivaMen", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 29.99, perUnit: 7.50, purchaseType: "one-time", brand: "Branded" },
    { competitor: "VivaMen", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 56.99, perUnit: 7.12, purchaseType: "one-time", brand: "Branded" },
    { competitor: "VivaMen", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 4, price: 42.99, perUnit: 10.75, purchaseType: "one-time", brand: "Branded" },
    { competitor: "VivaMen", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 8, price: 74.99, perUnit: 9.37, purchaseType: "one-time", brand: "Branded" },

    // ============================================================
    // FINASTERIDE — Hair Loss
    // ============================================================

    // --- Pharmica Finasteride Milpharm One-Time (most expensive) ---
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 19.99, perUnit: 0.71, purchaseType: "one-time", brand: "Milpharm", notes: "Milpharm manufacturer" },
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 56, price: 38.99, perUnit: 0.70, purchaseType: "one-time", brand: "Milpharm", notes: "Milpharm manufacturer" },
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 57.03, perUnit: 0.68, purchaseType: "one-time", brand: "Milpharm", notes: "Milpharm manufacturer" },
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 168, price: 109.99, perUnit: 0.65, purchaseType: "one-time", brand: "Milpharm", notes: "Milpharm manufacturer" },

    // --- Pharmica Finasteride Avianta One-Time (mid-price) ---
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 15.99, perUnit: 0.57, purchaseType: "one-time", brand: "Avianta", notes: "Avianta manufacturer" },
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 56, price: 29.99, perUnit: 0.54, purchaseType: "one-time", brand: "Avianta", notes: "Avianta manufacturer" },
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 43.99, perUnit: 0.52, purchaseType: "one-time", brand: "Avianta", notes: "Avianta manufacturer" },
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 168, price: 85.98, perUnit: 0.51, purchaseType: "one-time", brand: "Avianta", notes: "Avianta manufacturer" },

    // --- Pharmica Finasteride Avianta Subscription ---
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 14.39, perUnit: 0.51, purchaseType: "subscription", brand: "Avianta", notes: "Avianta manufacturer" },
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 56, price: 26.99, perUnit: 0.48, purchaseType: "subscription", brand: "Avianta", notes: "Avianta manufacturer" },
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 39.59, perUnit: 0.47, purchaseType: "subscription", brand: "Avianta", notes: "Avianta manufacturer" },
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 168, price: 77.38, perUnit: 0.46, purchaseType: "subscription", brand: "Avianta", notes: "Avianta manufacturer" },

    // --- Pharmica Finasteride Accord One-Time (cheapest) ---
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 16.99, perUnit: 0.61, purchaseType: "one-time", brand: "Accord", notes: "Accord (Actavis) manufacturer" },
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 56, price: 32.49, perUnit: 0.58, purchaseType: "one-time", brand: "Accord", notes: "Accord (Actavis) manufacturer" },
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 46.99, perUnit: 0.56, purchaseType: "one-time", brand: "Accord", notes: "Accord (Actavis) manufacturer" },
    { competitor: "Pharmica", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 168, price: 91.99, perUnit: 0.55, purchaseType: "one-time", brand: "Accord", notes: "Accord (Actavis) manufacturer" },

    // --- Doctor Fox Finasteride ---
    { competitor: "Doctor Fox", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 10.00, perUnit: 0.36, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 56, price: 18.80, perUnit: 0.34, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 26.50, perUnit: 0.32, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 168, price: 43.50, perUnit: 0.26, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },

    // --- Numan Finasteride ---
    { competitor: "Numan", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: null, price: null, perUnit: 1.00, purchaseType: "subscription", brand: "Generic", notes: "£1.00/tablet listed price. Subscription only. 50% off first month." },

    // --- Hims UK Finasteride ---
    { competitor: "Hims UK", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 23.00, perUnit: 0.82, purchaseType: "subscription", brand: "Generic", unit: "tablet", notes: "£23/month subscription. Includes clinician support + free delivery." },

    // --- Pharmacy Online Finasteride ---
    { competitor: "Pharmacy Online", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 13.90, perUnit: 0.50, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 56, price: 23.40, perUnit: 0.42, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 34.50, perUnit: 0.41, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 168, price: 58.90, perUnit: 0.35, purchaseType: "one-time", brand: "Generic", unit: "tablet" },

    // --- Pharmacy Online Viagra Connect ---
    { competitor: "Pharmacy Online", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 19.99, perUnit: 5.00, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 35.99, perUnit: 4.50, purchaseType: "one-time", brand: "Branded", unit: "tablet" },

    // --- Pharmacy Online Priligy ---
    { competitor: "Pharmacy Online", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "on-demand", packSize: 3, price: 21.85, perUnit: 7.28, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "on-demand", packSize: 6, price: 41.85, perUnit: 6.98, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "on-demand", packSize: 12, price: 76.85, perUnit: 6.40, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Priligy", category: "Premature Ejaculation", strength: "60mg", type: "on-demand", packSize: 3, price: 31.40, perUnit: 10.47, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Priligy", category: "Premature Ejaculation", strength: "60mg", type: "on-demand", packSize: 6, price: 53.40, perUnit: 8.90, purchaseType: "one-time", brand: "Branded", unit: "tablet" },
    { competitor: "Pharmacy Online", product: "Priligy", category: "Premature Ejaculation", strength: "60mg", type: "on-demand", packSize: 12, price: 96.40, perUnit: 8.03, purchaseType: "one-time", brand: "Branded", unit: "tablet" },

    // --- VivaMen Finasteride (from latest CSV) ---
    { competitor: "VivaMen", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 14.99, perUnit: 0.54, purchaseType: "one-time", brand: "Generic" },
    { competitor: "VivaMen", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 56, price: 27.99, perUnit: 0.50, purchaseType: "one-time", brand: "Generic" },
    { competitor: "VivaMen", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 39.99, perUnit: 0.48, purchaseType: "one-time", brand: "Generic" },

    // --- VivaMen Minoxidil Oral (from CSV) ---
    { competitor: "VivaMen", product: "Minoxidil Oral", category: "Hair Loss", strength: "2.5mg", type: "daily", packSize: 60, price: 40.00, perUnit: 0.67, purchaseType: "one-time", brand: "Generic" },
    { competitor: "VivaMen", product: "Minoxidil Oral", category: "Hair Loss", strength: "2.5mg", type: "daily", packSize: 120, price: 70.00, perUnit: 0.58, purchaseType: "one-time", brand: "Generic" },

    // --- VivaMen Minoxidil + Finasteride Scalp Solution ---
    { competitor: "VivaMen", product: "Minoxidil + Finasteride Solution", category: "Hair Loss", strength: "5% + 0.1%", type: "topical", packSize: 1, price: 29.99, perUnit: 29.99, purchaseType: "one-time", brand: "Generic", unit: "month supply" },

    // ============================================================
    // PRILIGY / DAPOXETINE — Premature Ejaculation
    // ============================================================

    // --- Pharmica Priligy 30mg ---
    { competitor: "Pharmica", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "as-needed", packSize: 3, price: 22.99, perUnit: 7.66, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "as-needed", packSize: 6, price: 45.99, perUnit: 7.67, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "as-needed", packSize: 9, price: 68.37, perUnit: 7.60, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "as-needed", packSize: 12, price: 90.99, perUnit: 7.58, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "as-needed", packSize: 18, price: 134.99, perUnit: 7.50, purchaseType: "one-time", brand: "Branded" },

    // --- Pharmica Priligy 60mg ---
    { competitor: "Pharmica", product: "Priligy", category: "Premature Ejaculation", strength: "60mg", type: "as-needed", packSize: 3, price: 31.99, perUnit: 10.66, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Priligy", category: "Premature Ejaculation", strength: "60mg", type: "as-needed", packSize: 6, price: 55.99, perUnit: 9.33, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Priligy", category: "Premature Ejaculation", strength: "60mg", type: "as-needed", packSize: 12, price: 109.99, perUnit: 9.17, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Pharmica", product: "Priligy", category: "Premature Ejaculation", strength: "60mg", type: "as-needed", packSize: 18, price: 161.99, perUnit: 9.00, purchaseType: "one-time", brand: "Branded" },

    // --- Doctor Fox Dapoxetine (generic) 30mg ---
    { competitor: "Doctor Fox", product: "Dapoxetine", category: "Premature Ejaculation", strength: "30mg", type: "as-needed", packSize: 3, price: 16.50, perUnit: 5.50, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Dapoxetine", category: "Premature Ejaculation", strength: "30mg", type: "as-needed", packSize: 6, price: 34.00, perUnit: 5.67, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Dapoxetine", category: "Premature Ejaculation", strength: "30mg", type: "as-needed", packSize: 12, price: 66.00, perUnit: 5.50, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Dapoxetine", category: "Premature Ejaculation", strength: "30mg", type: "as-needed", packSize: 24, price: 128.00, perUnit: 5.33, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },

    // --- Doctor Fox Dapoxetine 60mg ---
    { competitor: "Doctor Fox", product: "Dapoxetine", category: "Premature Ejaculation", strength: "60mg", type: "as-needed", packSize: 3, price: 25.00, perUnit: 8.33, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Dapoxetine", category: "Premature Ejaculation", strength: "60mg", type: "as-needed", packSize: 6, price: 46.00, perUnit: 7.67, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Dapoxetine", category: "Premature Ejaculation", strength: "60mg", type: "as-needed", packSize: 12, price: 86.00, perUnit: 7.17, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Dapoxetine", category: "Premature Ejaculation", strength: "60mg", type: "as-needed", packSize: 24, price: 167.00, perUnit: 6.96, purchaseType: "one-time", brand: "Generic", notes: "+prescription fee +£2.90 delivery" },

    // --- Doctor Fox Priligy (branded) 30mg ---
    { competitor: "Doctor Fox", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "as-needed", packSize: 3, price: 19.50, perUnit: 6.50, purchaseType: "one-time", brand: "Branded", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "as-needed", packSize: 6, price: 37.00, perUnit: 6.17, purchaseType: "one-time", brand: "Branded", notes: "+prescription fee +£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "as-needed", packSize: 12, price: 69.00, perUnit: 5.75, purchaseType: "one-time", brand: "Branded", notes: "+prescription fee +£2.90 delivery" },

    // ============================================================
    // REGAINE FOAM — Hair Loss (P Medicine, inc VAT)
    // ============================================================

    // --- Pharmica Regaine Foam ---
    { competitor: "Pharmica", product: "Regaine Foam", category: "Hair Loss", strength: "5%", type: "topical", packSize: 1, price: 36.99, perUnit: 36.99, purchaseType: "one-time", brand: "Regaine", unit: "canister" },
    { competitor: "Pharmica", product: "Regaine Foam", category: "Hair Loss", strength: "5%", type: "topical", packSize: 3, price: 54.99, perUnit: 18.33, purchaseType: "one-time", brand: "Regaine", unit: "canister" },
    { competitor: "Pharmica", product: "Regaine Foam", category: "Hair Loss", strength: "5%", type: "topical", packSize: 6, price: 108.99, perUnit: 18.17, purchaseType: "one-time", brand: "Regaine", unit: "canister" },
    { competitor: "Pharmica", product: "Regaine Foam", category: "Hair Loss", strength: "5%", type: "topical", packSize: 9, price: 162.99, perUnit: 18.11, purchaseType: "one-time", brand: "Regaine", unit: "canister" },
    { competitor: "Pharmica", product: "Regaine Foam", category: "Hair Loss", strength: "5%", type: "topical", packSize: 12, price: 216.99, perUnit: 18.08, purchaseType: "one-time", brand: "Regaine", unit: "canister" },

    // --- Doctor Fox Regaine Foam ---
    { competitor: "Doctor Fox", product: "Regaine Foam", category: "Hair Loss", strength: "5%", type: "topical", packSize: 1, price: 29.50, perUnit: 29.50, purchaseType: "one-time", brand: "Regaine", unit: "canister", notes: "No prescription fee for P medicine. +£2.90 delivery." },
    { competitor: "Doctor Fox", product: "Regaine Foam", category: "Hair Loss", strength: "5%", type: "topical", packSize: 3, price: 66.00, perUnit: 22.00, purchaseType: "one-time", brand: "Regaine", unit: "canister", notes: "+£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Regaine Foam", category: "Hair Loss", strength: "5%", type: "topical", packSize: 6, price: 122.00, perUnit: 20.33, purchaseType: "one-time", brand: "Regaine", unit: "canister", notes: "+£2.90 delivery" },

    // --- Numan Regaine ---
    { competitor: "Numan", product: "Regaine Foam", category: "Hair Loss", strength: "5%", type: "topical", packSize: 1, price: 65.00, perUnit: 65.00, purchaseType: "one-time", brand: "Regaine", unit: "canister", notes: "Full price. Multi-pack discounts to £51.67/bottle" },

    // --- VivaMen Regaine Foam (from latest CSV) ---
    { competitor: "VivaMen", product: "Regaine Foam", category: "Hair Loss", strength: "5%", type: "topical", packSize: 1, price: 39.99, perUnit: 39.99, purchaseType: "one-time", brand: "Regaine", unit: "canister" },
    { competitor: "VivaMen", product: "Regaine Foam", category: "Hair Loss", strength: "5%", type: "topical", packSize: 3, price: 79.99, perUnit: 26.66, purchaseType: "one-time", brand: "Regaine", unit: "canister" },

    // ============================================================
    // REGAINE SOLUTION — Hair Loss (P Medicine, inc VAT)
    // ============================================================

    // --- Pharmica Regaine Solution ---
    { competitor: "Pharmica", product: "Regaine Solution", category: "Hair Loss", strength: "5%", type: "topical", packSize: 1, price: 34.99, perUnit: 34.99, purchaseType: "one-time", brand: "Regaine", unit: "bottle" },
    { competitor: "Pharmica", product: "Regaine Solution", category: "Hair Loss", strength: "5%", type: "topical", packSize: 3, price: 57.99, perUnit: 19.33, purchaseType: "one-time", brand: "Regaine", unit: "bottle" },
    { competitor: "Pharmica", product: "Regaine Solution", category: "Hair Loss", strength: "5%", type: "topical", packSize: 6, price: 112.99, perUnit: 18.83, purchaseType: "one-time", brand: "Regaine", unit: "bottle" },
    { competitor: "Pharmica", product: "Regaine Solution", category: "Hair Loss", strength: "5%", type: "topical", packSize: 9, price: 168.99, perUnit: 18.78, purchaseType: "one-time", brand: "Regaine", unit: "bottle" },
    { competitor: "Pharmica", product: "Regaine Solution", category: "Hair Loss", strength: "5%", type: "topical", packSize: 12, price: 224.99, perUnit: 18.75, purchaseType: "one-time", brand: "Regaine", unit: "bottle" },

    // --- Doctor Fox Regaine Solution ---
    { competitor: "Doctor Fox", product: "Regaine Solution", category: "Hair Loss", strength: "5%", type: "topical", packSize: 1, price: 29.00, perUnit: 29.00, purchaseType: "one-time", brand: "Regaine", unit: "bottle", notes: "+£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Regaine Solution", category: "Hair Loss", strength: "5%", type: "topical", packSize: 3, price: 64.00, perUnit: 21.33, purchaseType: "one-time", brand: "Regaine", unit: "bottle", notes: "+£2.90 delivery" },
    { competitor: "Doctor Fox", product: "Regaine Solution", category: "Hair Loss", strength: "5%", type: "topical", packSize: 6, price: 118.00, perUnit: 19.67, purchaseType: "one-time", brand: "Regaine", unit: "bottle", notes: "+£2.90 delivery" },

    // ============================================================
    // OUSHK PHARMACY — All Products
    // ============================================================

    // --- Oushk Sildenafil ---
    { competitor: "Oushk Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 10.25, perUnit: 2.56, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oushk Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 15.50, perUnit: 1.94, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oushk Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 13.99, perUnit: 3.50, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oushk Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 22.99, perUnit: 2.87, purchaseType: "one-time", brand: "Generic" },

    // --- Oushk Tadalafil On-Demand ---
    { competitor: "Oushk Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 4, price: 18.00, perUnit: 4.50, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oushk Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 8, price: 30.00, perUnit: 3.75, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oushk Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 4, price: 20.00, perUnit: 5.00, purchaseType: "one-time", brand: "Generic" },

    // --- Oushk Tadalafil Daily ---
    { competitor: "Oushk Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 28, price: 34.00, perUnit: 1.21, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oushk Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 28, price: 40.00, perUnit: 1.43, purchaseType: "one-time", brand: "Generic" },

    // --- VivaMen Regaine Solution (from latest CSV) ---
    { competitor: "VivaMen", product: "Regaine Solution", category: "Hair Loss", strength: "5%", type: "topical", packSize: 1, price: 36.99, perUnit: 36.99, purchaseType: "one-time", brand: "Regaine", unit: "bottle" },
    { competitor: "VivaMen", product: "Regaine Solution", category: "Hair Loss", strength: "5%", type: "topical", packSize: 3, price: 64.99, perUnit: 21.66, purchaseType: "one-time", brand: "Regaine", unit: "bottle" },

    // ============================================================
    // TESTOSTERONE — New category
    // ============================================================

    // --- VivaMen Testogel ---
    { competitor: "VivaMen", product: "Testogel", category: "Testosterone", strength: "40.5mg", type: "daily", packSize: 30, price: 74.99, perUnit: 2.50, purchaseType: "one-time", brand: "Branded", unit: "sachet" },

    // --- VivaMen Tostran ---
    { competitor: "VivaMen", product: "Tostran", category: "Testosterone", strength: "2%", type: "daily", packSize: 1, price: 54.99, perUnit: 54.99, purchaseType: "one-time", brand: "Branded", unit: "60g pump" },

    // --- Testogel Competitors ---
    { competitor: "Simple Online Pharmacy", product: "Testogel", category: "Testosterone", strength: "40.5mg", type: "daily", packSize: 30, price: 46.99, perUnit: 1.57, purchaseType: "one-time", brand: "Branded", unit: "sachet (out of stock)" },
    { competitor: "Asda", product: "Testogel", category: "Testosterone", strength: "40.5mg", type: "daily", packSize: 30, price: 54.50, perUnit: 1.82, purchaseType: "one-time", brand: "Branded", unit: "sachet" },
    { competitor: "E-Surgery", product: "Testogel", category: "Testosterone", strength: "40.5mg", type: "daily", packSize: 30, price: 54.95, perUnit: 1.83, purchaseType: "one-time", brand: "Branded", unit: "sachet" },
    { competitor: "Superdrug", product: "Testogel", category: "Testosterone", strength: "40.5mg", type: "daily", packSize: 30, price: 55.00, perUnit: 1.83, purchaseType: "one-time", brand: "Branded", unit: "sachet" },
    { competitor: "PharmXtra", product: "Testogel", category: "Testosterone", strength: "40.5mg", type: "daily", packSize: 30, price: 119.99, perUnit: 4.00, purchaseType: "one-time", brand: "Branded", unit: "sachet" },

    // --- Tostran Competitors ---
    { competitor: "Clear Chemist", product: "Tostran", category: "Testosterone", strength: "2%", type: "daily", packSize: 1, price: 37.38, perUnit: 37.38, purchaseType: "one-time", brand: "Branded", unit: "60g pump" },
    { competitor: "Simple Online Pharmacy", product: "Tostran", category: "Testosterone", strength: "2%", type: "daily", packSize: 1, price: 39.99, perUnit: 39.99, purchaseType: "one-time", brand: "Branded", unit: "60g pump (out of stock)" },
    { competitor: "E-Surgery", product: "Tostran", category: "Testosterone", strength: "2%", type: "daily", packSize: 1, price: 49.95, perUnit: 49.95, purchaseType: "one-time", brand: "Branded", unit: "60g pump" },
    { competitor: "Asda", product: "Tostran", category: "Testosterone", strength: "2%", type: "daily", packSize: 1, price: 53.00, perUnit: 53.00, purchaseType: "one-time", brand: "Branded", unit: "60g pump" },
    { competitor: "Superdrug", product: "Tostran", category: "Testosterone", strength: "2%", type: "daily", packSize: 1, price: 55.00, perUnit: 55.00, purchaseType: "one-time", brand: "Branded", unit: "60g pump" },

    // ============================================================
    // WEIGHT LOSS — New category
    // ============================================================

    // --- VivaMen Mounjaro ---
    { competitor: "VivaMen", product: "Mounjaro", category: "Weight Loss", strength: "2.5mg", type: "weekly", packSize: 1, price: 169.00, perUnit: 169.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "VivaMen", product: "Mounjaro", category: "Weight Loss", strength: "5mg", type: "weekly", packSize: 1, price: 189.00, perUnit: 189.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "VivaMen", product: "Mounjaro", category: "Weight Loss", strength: "7.5mg", type: "weekly", packSize: 1, price: 249.00, perUnit: 249.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "VivaMen", product: "Mounjaro", category: "Weight Loss", strength: "10mg", type: "weekly", packSize: 1, price: 279.00, perUnit: 279.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "VivaMen", product: "Mounjaro", category: "Weight Loss", strength: "12.5mg", type: "weekly", packSize: 1, price: 299.00, perUnit: 299.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "VivaMen", product: "Mounjaro", category: "Weight Loss", strength: "15mg", type: "weekly", packSize: 1, price: 319.00, perUnit: 319.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },

    // --- VivaMen Wegovy ---
    { competitor: "VivaMen", product: "Wegovy", category: "Weight Loss", strength: "0.25mg", type: "weekly", packSize: 1, price: 114.99, perUnit: 114.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "VivaMen", product: "Wegovy", category: "Weight Loss", strength: "0.5mg", type: "weekly", packSize: 1, price: 119.99, perUnit: 119.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "VivaMen", product: "Wegovy", category: "Weight Loss", strength: "1mg", type: "weekly", packSize: 1, price: 124.99, perUnit: 124.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "VivaMen", product: "Wegovy", category: "Weight Loss", strength: "1.7mg", type: "weekly", packSize: 1, price: 179.99, perUnit: 179.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "VivaMen", product: "Wegovy", category: "Weight Loss", strength: "2.4mg", type: "weekly", packSize: 1, price: 249.99, perUnit: 249.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },

    // =============================================
    // VIVAFEM HRT PRODUCTS
    // =============================================

    // --- VivaFem Oestrogel ---
    { competitor: "VivaFem", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 1, price: 21.99, perUnit: 21.99, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "VivaFem", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 2, price: 42.99, perUnit: 21.50, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "VivaFem", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 3, price: 62.99, perUnit: 21.00, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    // --- VivaFem Utrogestan ---
    { competitor: "VivaFem", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 30, price: 19.99, perUnit: 0.67, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "VivaFem", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 60, price: 38.99, perUnit: 0.65, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "VivaFem", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 90, price: 56.99, perUnit: 0.63, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    // --- VivaFem Lenzetto ---
    { competitor: "VivaFem", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 1, price: 21.99, perUnit: 21.99, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "VivaFem", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 2, price: 39.99, perUnit: 20.00, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "VivaFem", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 3, price: 59.99, perUnit: 20.00, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    // --- VivaFem Utrogestan + Oestrogel Combo ---
    { competitor: "VivaFem", product: "Utrogestan + Oestrogel", category: "HRT", strength: "100mg + 0.06%", type: "daily", packSize: 1, price: 39.99, perUnit: 39.99, purchaseType: "one-time", brand: "Branded", unit: "1 month combo" },
    { competitor: "VivaFem", product: "Utrogestan + Oestrogel", category: "HRT", strength: "100mg + 0.06%", type: "daily", packSize: 2, price: 79.99, perUnit: 40.00, purchaseType: "one-time", brand: "Branded", unit: "1 month combo" },
    { competitor: "VivaFem", product: "Utrogestan + Oestrogel", category: "HRT", strength: "100mg + 0.06%", type: "daily", packSize: 3, price: 109.99, perUnit: 36.66, purchaseType: "one-time", brand: "Branded", unit: "1 month combo" },

    // --- VivaFem Lenzetto + Utrogestan Combo ---
    { competitor: "VivaFem", product: "Lenzetto + Utrogestan", category: "HRT", strength: "1.53mg + 100mg", type: "daily", packSize: 1, price: 40.99, perUnit: 40.99, purchaseType: "one-time", brand: "Branded", unit: "1 month combo (1 spray + 30 caps)" },
    { competitor: "VivaFem", product: "Lenzetto + Utrogestan", category: "HRT", strength: "1.53mg + 100mg", type: "daily", packSize: 3, price: 109.99, perUnit: 36.66, purchaseType: "one-time", brand: "Branded", unit: "1 month combo (3 sprays + 90 caps)" },

    // =============================================
    // HRT COMPETITORS - OESTROGEL
    // =============================================
    { competitor: "Dock Pharmacy", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 1, price: 13.49, perUnit: 13.49, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Chemist4U", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 1, price: 21.99, perUnit: 21.99, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Chemist4U", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 2, price: 39.99, perUnit: 20.00, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "AccessDoctor", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 1, price: 23.99, perUnit: 23.99, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "AccessDoctor", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 2, price: 35.99, perUnit: 18.00, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "AccessDoctor", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 3, price: 57.99, perUnit: 19.33, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Pharmacy Planet", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 1, price: 24.00, perUnit: 24.00, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Pharmacy Planet", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 2, price: 36.00, perUnit: 18.00, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Pharmacy Planet", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 3, price: 45.00, perUnit: 15.00, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Pharmacy Planet", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 4, price: 54.00, perUnit: 13.50, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Oxford Online Pharmacy", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 1, price: 24.99, perUnit: 24.99, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Oxford Online Pharmacy", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 2, price: 45.95, perUnit: 22.98, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Oxford Online Pharmacy", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 3, price: 68.95, perUnit: 22.98, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Prescription Doctor", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 1, price: 24.99, perUnit: 24.99, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Prescription Doctor", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 2, price: 46.99, perUnit: 23.50, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "SimplyMeds Online", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 1, price: 24.99, perUnit: 24.99, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "SimplyMeds Online", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 2, price: 45.98, perUnit: 22.99, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "SimplyMeds Online", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 3, price: 59.97, perUnit: 19.99, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "The Independent Pharmacy", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 1, price: 27.99, perUnit: 27.99, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "E-Surgery", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 1, price: 34.95, perUnit: 34.95, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "The Online Clinic", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 1, price: 34.95, perUnit: 34.95, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Superdrug", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 1, price: 40.00, perUnit: 40.00, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Boots", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 3, price: 44.00, perUnit: 14.67, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Treated.com", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 1, price: 44.95, perUnit: 44.95, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Treated.com", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 2, price: 73.95, perUnit: 36.98, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },
    { competitor: "Treated.com", product: "Oestrogel", category: "HRT", strength: "0.06%", type: "daily", packSize: 3, price: 99.95, perUnit: 33.32, purchaseType: "one-time", brand: "Branded", unit: "80g pump" },

    // =============================================
    // HRT COMPETITORS - UTROGESTAN
    // =============================================
    { competitor: "Dock Pharmacy", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 30, price: 16.50, perUnit: 0.55, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "E-Surgery", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 30, price: 24.95, perUnit: 0.83, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "Chemist4U", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 30, price: 27.99, perUnit: 0.93, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "Click2Pharmacy", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 30, price: 28.99, perUnit: 0.97, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "Click2Pharmacy", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 60, price: 56.98, perUnit: 0.95, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "Click2Pharmacy", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 90, price: 83.97, perUnit: 0.93, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "SimplyMeds Online", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 30, price: 29.99, perUnit: 1.00, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "SimplyMeds Online", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 60, price: 49.99, perUnit: 0.83, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "The Family Chemist", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 30, price: 29.99, perUnit: 1.00, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "The Family Chemist", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 60, price: 59.99, perUnit: 1.00, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "The Family Chemist", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 90, price: 89.99, perUnit: 1.00, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "The Independent Pharmacy", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 30, price: 31.99, perUnit: 1.07, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "Oxford Online Pharmacy", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 30, price: 31.98, perUnit: 1.07, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "Oxford Online Pharmacy", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 60, price: 54.99, perUnit: 0.92, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "Oxford Online Pharmacy", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 90, price: 69.99, perUnit: 0.78, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "Prescription Doctor", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 30, price: 32.99, perUnit: 1.10, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "The Online Clinic", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 30, price: 34.95, perUnit: 1.17, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "Treated.com", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 30, price: 37.95, perUnit: 1.27, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "Treated.com", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 60, price: 59.95, perUnit: 1.00, purchaseType: "one-time", brand: "Branded", unit: "capsule" },
    { competitor: "Treated.com", product: "Utrogestan", category: "HRT", strength: "100mg", type: "daily", packSize: 90, price: 81.95, perUnit: 0.91, purchaseType: "one-time", brand: "Branded", unit: "capsule" },

    // =============================================
    // HRT COMPETITORS - LENZETTO
    // =============================================
    { competitor: "The Family Chemist", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 1, price: 20.99, perUnit: 20.99, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "The Family Chemist", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 2, price: 41.98, perUnit: 21.00, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "The Family Chemist", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 3, price: 61.99, perUnit: 20.66, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "SimplyMeds Online", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 1, price: 21.99, perUnit: 21.99, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "SimplyMeds Online", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 2, price: 40.99, perUnit: 20.50, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "SimplyMeds Online", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 3, price: 60.99, perUnit: 20.33, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Oxford Online Pharmacy", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 1, price: 21.99, perUnit: 21.99, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Chemist4U", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 1, price: 21.99, perUnit: 21.99, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Chemist4U", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 3, price: 36.99, perUnit: 12.33, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Superdrug", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 1, price: 22.00, perUnit: 22.00, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Superdrug", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 3, price: 53.00, perUnit: 17.67, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Online Pharmacy4U", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 1, price: 22.50, perUnit: 22.50, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Online Pharmacy4U", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 2, price: 43.50, perUnit: 21.75, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Dock Pharmacy", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 1, price: 24.50, perUnit: 24.50, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "E-Surgery", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 1, price: 24.95, perUnit: 24.95, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "The Independent Pharmacy", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 1, price: 24.99, perUnit: 24.99, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Pharmacy Planet", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 1, price: 29.00, perUnit: 29.00, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Pharmacy Planet", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 2, price: 42.00, perUnit: 21.00, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Pharmacy Planet", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 3, price: 50.00, perUnit: 16.67, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "The Online Clinic", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 1, price: 34.95, perUnit: 34.95, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Treated.com", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 1, price: 37.95, perUnit: 37.95, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Treated.com", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 2, price: 55.95, perUnit: 27.98, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Boots", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 1, price: 22.00, perUnit: 22.00, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },
    { competitor: "Boots", product: "Lenzetto", category: "HRT", strength: "1.53mg", type: "daily", packSize: 3, price: 53.00, perUnit: 17.67, purchaseType: "one-time", brand: "Branded", unit: "56 doses" },

    // =============================================
    // HRT COMPETITORS - UTROGESTAN + OESTROGEL COMBO
    // =============================================
    { competitor: "MyPharmacy365", product: "Utrogestan + Oestrogel", category: "HRT", strength: "100mg + 0.06%", type: "daily", packSize: 1, price: 39.99, perUnit: 39.99, purchaseType: "one-time", brand: "Branded", unit: "1 month combo" },
    { competitor: "MyPharmacy365", product: "Utrogestan + Oestrogel", category: "HRT", strength: "100mg + 0.06%", type: "daily", packSize: 3, price: 107.99, perUnit: 36.00, purchaseType: "one-time", brand: "Branded", unit: "1 month combo" },
    { competitor: "Prescription Doctor", product: "Utrogestan + Oestrogel", category: "HRT", strength: "100mg + 0.06%", type: "daily", packSize: 1, price: 44.99, perUnit: 44.99, purchaseType: "one-time", brand: "Branded", unit: "1 month combo" },
    { competitor: "Oxford Online Pharmacy", product: "Utrogestan + Oestrogel", category: "HRT", strength: "100mg + 0.06%", type: "daily", packSize: 1, price: 54.99, perUnit: 54.99, purchaseType: "one-time", brand: "Branded", unit: "1 month combo" },
    { competitor: "Treated.com", product: "Utrogestan + Oestrogel", category: "HRT", strength: "100mg + 0.06%", type: "daily", packSize: 1, price: 77.95, perUnit: 77.95, purchaseType: "one-time", brand: "Branded", unit: "1 month combo" },
    { competitor: "Boots", product: "Utrogestan + Oestrogel", category: "HRT", strength: "100mg + 0.06%", type: "daily", packSize: 3, price: 83.00, perUnit: 27.67, purchaseType: "one-time", brand: "Branded", unit: "1 month combo" },

    // =============================================
    // VIVAFEM HRT - ESTRIOL, IMVAGGIS, ANDROFEME
    // =============================================
    { competitor: "VivaFem", product: "Estriol Cream", category: "HRT", strength: "1mg/g", type: "daily", packSize: 1, price: 16.99, perUnit: 16.99, purchaseType: "one-time", brand: "Branded", unit: "15g tube" },
    { competitor: "Pharmacy Online", product: "Estriol Cream", category: "HRT", strength: "1mg/g", type: "daily", packSize: 1, price: 20.95, perUnit: 20.95, purchaseType: "one-time", brand: "Branded", unit: "15g Ovestin" },
    { competitor: "The Independent Pharmacy", product: "Estriol Cream", category: "HRT", strength: "1mg/g", type: "daily", packSize: 1, price: 24.99, perUnit: 24.99, purchaseType: "one-time", brand: "Branded", unit: "15g tube" },
    { competitor: "Clear Chemist", product: "Estriol Cream", category: "HRT", strength: "1mg/g", type: "daily", packSize: 1, price: 29.99, perUnit: 29.99, purchaseType: "one-time", brand: "Branded", unit: "80g tube" },
    { competitor: "Asda", product: "Estriol Cream", category: "HRT", strength: "1mg/g", type: "daily", packSize: 1, price: 50.00, perUnit: 50.00, purchaseType: "one-time", brand: "Branded", unit: "80g tube only" },
    { competitor: "Superdrug", product: "Estriol Cream", category: "HRT", strength: "1mg/g", type: "daily", packSize: 1, price: 55.00, perUnit: 55.00, purchaseType: "one-time", brand: "Branded", unit: "80g tube only" },

    { competitor: "VivaFem", product: "Imvaggis", category: "HRT", strength: "0.03mg", type: "daily", packSize: 24, price: 29.99, perUnit: 1.25, purchaseType: "one-time", brand: "Branded", unit: "pessary" },
    { competitor: "E-Surgery", product: "Imvaggis", category: "HRT", strength: "0.03mg", type: "daily", packSize: 24, price: 24.95, perUnit: 1.04, purchaseType: "one-time", brand: "Branded", unit: "pessary" },
    { competitor: "The Independent Pharmacy", product: "Imvaggis", category: "HRT", strength: "0.03mg", type: "daily", packSize: 24, price: 25.99, perUnit: 1.08, purchaseType: "one-time", brand: "Branded", unit: "pessary" },
    { competitor: "Click Pharmacy", product: "Imvaggis", category: "HRT", strength: "0.03mg", type: "daily", packSize: 24, price: 25.99, perUnit: 1.08, purchaseType: "one-time", brand: "Branded", unit: "pessary" },
    { competitor: "Clear Chemist", product: "Imvaggis", category: "HRT", strength: "0.03mg", type: "daily", packSize: 24, price: 27.99, perUnit: 1.17, purchaseType: "one-time", brand: "Branded", unit: "pessary" },
    { competitor: "Treated.com", product: "Imvaggis", category: "HRT", strength: "0.03mg", type: "daily", packSize: 24, price: 53.95, perUnit: 2.25, purchaseType: "one-time", brand: "Branded", unit: "pessary (inc consultation+delivery)" },

    { competitor: "VivaFem", product: "Androfeme", category: "HRT", strength: "1%", type: "daily", packSize: 1, price: 149.99, perUnit: 149.99, purchaseType: "one-time", brand: "Branded", unit: "50ml" },
    { competitor: "Livewell Nationwide", product: "Androfeme", category: "HRT", strength: "1%", type: "daily", packSize: 1, price: 99.50, perUnit: 99.50, purchaseType: "one-time", brand: "Branded", unit: "50ml" },
    { competitor: "LIVVE", product: "Androfeme", category: "HRT", strength: "1%", type: "daily", packSize: 1, price: 120.00, perUnit: 120.00, purchaseType: "one-time", brand: "Branded", unit: "50ml" },
    { competitor: "Church Pharmacy", product: "Androfeme", category: "HRT", strength: "1%", type: "daily", packSize: 1, price: 125.00, perUnit: 125.00, purchaseType: "one-time", brand: "Branded", unit: "50ml (login required)" },
    { competitor: "Myla Health", product: "Androfeme", category: "HRT", strength: "1%", type: "daily", packSize: 1, price: 135.00, perUnit: 135.00, purchaseType: "one-time", brand: "Branded", unit: "50ml" },
    { competitor: "The Online Clinic", product: "Androfeme", category: "HRT", strength: "1%", type: "daily", packSize: 1, price: 149.95, perUnit: 149.95, purchaseType: "one-time", brand: "Branded", unit: "50ml" },

    // =============================================
    // VIVAMEN/VIVAFEM TEST KITS
    // =============================================
    { competitor: "VivaMen", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 129.99, perUnit: 129.99, purchaseType: "one-time", brand: "Branded", unit: "blood test kit" },
    { competitor: "Medichecks", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 19.00, perUnit: 19.00, purchaseType: "one-time", brand: "Unbranded", unit: "finger-prick, 1 biomarker (Total T only)" },
    { competitor: "London Health Co", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 19.00, perUnit: 19.00, purchaseType: "one-time", brand: "Unbranded", unit: "finger-prick, 1 biomarker (Total T only, sale price)" },
    { competitor: "OneDayTests", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 19.00, perUnit: 19.00, purchaseType: "one-time", brand: "Unbranded", unit: "finger-prick, 1 biomarker (Total T only)" },
    { competitor: "Optimale", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 33.95, perUnit: 33.95, purchaseType: "one-time", brand: "Unbranded", unit: "finger-prick, 4 biomarkers (Total T, Free T, SHBG, Albumin). 2 tests needed for TRT" },
    { competitor: "Voy (was Manual)", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 33.95, perUnit: 33.95, purchaseType: "one-time", brand: "Unbranded", unit: "INITIAL only (finger-prick). Must buy enhanced venous test too (£49.95-£119.95). Total £83.90-£153.90" },
    { competitor: "Welzo", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 39.99, perUnit: 39.99, purchaseType: "one-time", brand: "Unbranded", unit: "finger-prick, 1 biomarker (Total T)" },
    { competitor: "Cloud Pharmacy", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 39.95, perUnit: 39.95, purchaseType: "one-time", brand: "Unbranded", unit: "finger-prick, 1 biomarker (Total T)" },
    { competitor: "Forth", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 41.00, perUnit: 41.00, purchaseType: "one-time", brand: "Unbranded", unit: "finger-prick, 1 biomarker (Total T). +£59 home nurse / +£45 clinic for venous" },
    { competitor: "SimplyMeds", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 43.99, perUnit: 43.99, purchaseType: "one-time", brand: "Unbranded", unit: "finger-prick, 1 biomarker (Total T)" },
    { competitor: "Randox Health", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 44.00, perUnit: 44.00, purchaseType: "one-time", brand: "Unbranded", unit: "Tasso+ upper arm, 8 biomarkers inc testosterone. At home, no clinic" },
    { competitor: "ZAVA", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 49.99, perUnit: 49.99, purchaseType: "one-time", brand: "Unbranded", unit: "finger-prick, 1 biomarker (Total T)" },
    { competitor: "Superdrug", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 55.00, perUnit: 55.00, purchaseType: "one-time", brand: "Unbranded", unit: "finger-prick, 1 biomarker (Total T)" },
    { competitor: "Thriva", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 62.10, perUnit: 62.10, purchaseType: "subscription", brand: "Unbranded", unit: "finger-prick, 4 biomarkers (Total T, Free T, SHBG, FAI). Subscription price" },
    { competitor: "Numan", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 68.00, perUnit: 68.00, purchaseType: "one-time", brand: "Unbranded", unit: "Tasso+ device, 5 biomarkers (Total T, Free T, Albumin, FAI, SHBG). No fingerprick, no clinic" },
    { competitor: "OneDayTests (TRT)", product: "Testosterone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 145.00, perUnit: 145.00, purchaseType: "one-time", brand: "Unbranded", unit: "42 biomarkers (full TRT panel: FBC, liver, kidney, cholesterol, hormones)" },
    { competitor: "VivaFem", product: "Menopause Confirmation Panel", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 119.99, perUnit: 119.99, purchaseType: "one-time", brand: "Branded", unit: "blood test kit" },
    { competitor: "VivaFem", product: "Female Hormone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 119.99, perUnit: 119.99, purchaseType: "one-time", brand: "Branded", unit: "blood test (Oestradiol, Progesterone, Free Testosterone, FSH, LH)" },

    // =============================================
    // TEST KITS - CHLAMYDIA
    // ============================================='
    { competitor: "E-Pharmacy", product: "Chlamydia Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 15.95, perUnit: 15.95, purchaseType: "one-time", brand: "Unbranded", unit: "kit (chlamydia+gonorrhoea combo, unisex)" },
    { competitor: "Dr Fox", product: "Chlamydia Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 23.40, perUnit: 23.40, purchaseType: "one-time", brand: "Unbranded", unit: "kit (unisex, with code TEST10)" },
    { competitor: "Chemist Click", product: "Chlamydia Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 27.49, perUnit: 27.49, purchaseType: "one-time", brand: "Unbranded", unit: "kit (unisex)" },
    { competitor: "Simple Online Pharmacy", product: "Chlamydia Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 27.50, perUnit: 27.50, purchaseType: "one-time", brand: "Unbranded", unit: "kit (unisex, urine men / swab women)" },
    { competitor: "LloydsPharmacy", product: "Chlamydia Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 27.99, perUnit: 27.99, purchaseType: "one-time", brand: "Unbranded", unit: "kit (separate M/F, chlamydia+gonorrhoea)" },
    { competitor: "Medicines2U", product: "Chlamydia Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 29.99, perUnit: 29.99, purchaseType: "one-time", brand: "Unbranded", unit: "kit (chlamydia+gonorrhoea combo)" },
    { competitor: "Superdrug", product: "Chlamydia Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 34.99, perUnit: 34.99, purchaseType: "one-time", brand: "Unbranded", unit: "kit (unisex, urine men / swab women)" },
    { competitor: "Boots", product: "Chlamydia Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 35.00, perUnit: 35.00, purchaseType: "one-time", brand: "Unbranded", unit: "kit (separate M/F versions)" },
    { competitor: "Cloud Pharmacy", product: "Chlamydia Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 35.00, perUnit: 35.00, purchaseType: "one-time", brand: "Unbranded", unit: "kit (chlamydia+gonorrhoea combo, unisex)" },

    // =============================================
    // TEST KITS - GONORRHOEA (mostly combo with Chlamydia)
    // =============================================
    { competitor: "Simple Online Pharmacy", product: "Gonorrhoea Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 27.50, perUnit: 27.50, purchaseType: "one-time", brand: "Unbranded", unit: "kit (gonorrhoea only, unisex)" },
    { competitor: "LloydsPharmacy", product: "Gonorrhoea Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 27.99, perUnit: 27.99, purchaseType: "one-time", brand: "Unbranded", unit: "kit (combined with chlamydia, M/F)" },
    { competitor: "Chemist Click", product: "Gonorrhoea Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 29.99, perUnit: 29.99, purchaseType: "one-time", brand: "Unbranded", unit: "kit (chlamydia+gonorrhoea combo, unisex)" },
    { competitor: "Asda", product: "Gonorrhoea Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 32.00, perUnit: 32.00, purchaseType: "one-time", brand: "Unbranded", unit: "kit (oral chlamydia+gonorrhoea combo)" },
    { competitor: "Cloud Pharmacy", product: "Gonorrhoea Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 35.00, perUnit: 35.00, purchaseType: "one-time", brand: "Unbranded", unit: "kit (chlamydia+gonorrhoea combo)" },
    { competitor: "The Independent Pharmacy", product: "Gonorrhoea Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 42.99, perUnit: 42.99, purchaseType: "one-time", brand: "Unbranded", unit: "kit (chlamydia+gonorrhoea combo, unisex)" },
    { competitor: "Superdrug", product: "Gonorrhoea Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 42.99, perUnit: 42.99, purchaseType: "one-time", brand: "Unbranded", unit: "kit (chlamydia+gonorrhoea combo, unisex)" },
    { competitor: "Boots", product: "Gonorrhoea Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 43.00, perUnit: 43.00, purchaseType: "one-time", brand: "Unbranded", unit: "kit (chlamydia+gonorrhoea combo, men)" },
    { competitor: "Better2Know", product: "Gonorrhoea Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 45.00, perUnit: 45.00, purchaseType: "one-time", brand: "Unbranded", unit: "kit (chlamydia+gonorrhoea combo)" },
    { competitor: "Medicines Online", product: "Gonorrhoea Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 45.00, perUnit: 45.00, purchaseType: "one-time", brand: "Unbranded", unit: "kit (3-in-1: chlamydia+gonorrhoea+ureaplasma)" },

    // =============================================
    // TEST KITS - BV (Bacterial Vaginosis)
    // =============================================
    { competitor: "Boots (Canestest)", product: "BV Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 5.99, perUnit: 5.99, purchaseType: "one-time", brand: "Unbranded", unit: "pH swab test (instant result)" },
    { competitor: "HomeHealth UK", product: "BV Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 5, price: 6.49, perUnit: 1.30, purchaseType: "one-time", brand: "Unbranded", unit: "pH rapid test device" },
    { competitor: "The Family Chemist", product: "BV Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 6.99, perUnit: 6.99, purchaseType: "one-time", brand: "Unbranded", unit: "pH swab test" },
    { competitor: "YourPharmacy", product: "BV Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 8.49, perUnit: 8.49, purchaseType: "one-time", brand: "Unbranded", unit: "pH swab, CE-marked, 30-sec result" },
    { competitor: "The Independent Pharmacy", product: "BV Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 10.49, perUnit: 10.49, purchaseType: "one-time", brand: "Unbranded", unit: "Canestest pH swab" },
    { competitor: "HomeDiagnostics", product: "BV Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 89.95, perUnit: 89.95, purchaseType: "one-time", brand: "Unbranded", unit: "lab test: Gardnerella, Trich, Candida, Culture" },
    { competitor: "Mayfield Clinic", product: "BV Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 150.00, perUnit: 150.00, purchaseType: "one-time", brand: "Unbranded", unit: "lab swab: 5 biomarkers inc Gardnerella, Mycoplasma, Trich" },

    // =============================================
    // TEST KITS - WOMEN'S HORMONAL BLOOD TEST
    // =============================================
    { competitor: "Randox Health", product: "Female Hormone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 44.00, perUnit: 44.00, purchaseType: "one-time", brand: "Unbranded", unit: "blood test (8 biomarkers: FSH, Progesterone, Oestrogen+)" },
    { competitor: "Welzo", product: "Female Hormone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 59.00, perUnit: 59.00, purchaseType: "one-time", brand: "Unbranded", unit: "blood test (7 biomarkers: LH, FSH, Oestradiol, Testosterone. No Progesterone)" },
    { competitor: "Vitall", product: "Female Hormone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 69.00, perUnit: 69.00, purchaseType: "one-time", brand: "Unbranded", unit: "blood test (3 biomarkers: Oestradiol, FSH, LH only)" },
    { competitor: "OneDayTests", product: "Female Hormone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 75.00, perUnit: 75.00, purchaseType: "one-time", brand: "Unbranded", unit: "blood test (5 biomarkers: Oestradiol, Progesterone, FSH, LH, Testosterone)" },
    { competitor: "Medichecks", product: "Female Hormone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 79.00, perUnit: 79.00, purchaseType: "one-time", brand: "Unbranded", unit: "blood test (9 biomarkers: FSH, LH, Oestradiol, Testosterone. No Progesterone)" },
    { competitor: "Forth", product: "Female Hormone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 89.00, perUnit: 89.00, purchaseType: "one-time", brand: "Unbranded", unit: "blood test (11 biomarkers inc FSH, LH, Oestradiol, Progesterone, Testosterone)" },
    { competitor: "Thriva", product: "Female Hormone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 99.00, perUnit: 99.00, purchaseType: "one-time", brand: "Unbranded", unit: "blood test (Oestradiol, LH, FSH, Free+Total Testosterone. No Progesterone)" },
    { competitor: "Forth (Menopause)", product: "Female Hormone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 119.00, perUnit: 119.00, purchaseType: "one-time", brand: "Unbranded", unit: "blood test (20 biomarkers inc FSH, LH, Oestradiol, Progesterone)" },
    { competitor: "Mayfield Clinic", product: "Female Hormone Test Kit", category: "Test Kits", strength: "-", type: "one-off", packSize: 1, price: 150.00, perUnit: 150.00, purchaseType: "one-time", brand: "Unbranded", unit: "blood test (Full female hormone profile)" },

    // =============================================
    // PHARMICA — Weight Loss (Mounjaro & Wegovy)
    // =============================================

    // --- Pharmica Mounjaro ---
    { competitor: "Pharmica", product: "Mounjaro", category: "Weight Loss", strength: "2.5mg", type: "weekly", packSize: 1, price: 159.99, perUnit: 159.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Pharmica", product: "Mounjaro", category: "Weight Loss", strength: "5mg", type: "weekly", packSize: 1, price: 199.99, perUnit: 199.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Pharmica", product: "Mounjaro", category: "Weight Loss", strength: "7.5mg", type: "weekly", packSize: 1, price: 259.99, perUnit: 259.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Pharmica", product: "Mounjaro", category: "Weight Loss", strength: "10mg", type: "weekly", packSize: 1, price: 284.99, perUnit: 284.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Pharmica", product: "Mounjaro", category: "Weight Loss", strength: "12.5mg", type: "weekly", packSize: 1, price: 309.99, perUnit: 309.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Pharmica", product: "Mounjaro", category: "Weight Loss", strength: "15mg", type: "weekly", packSize: 1, price: 319.99, perUnit: 319.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },

    // --- Pharmica Wegovy ---
    { competitor: "Pharmica", product: "Wegovy", category: "Weight Loss", strength: "0.25mg", type: "weekly", packSize: 1, price: 119.99, perUnit: 119.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Pharmica", product: "Wegovy", category: "Weight Loss", strength: "0.5mg", type: "weekly", packSize: 1, price: 134.99, perUnit: 134.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Pharmica", product: "Wegovy", category: "Weight Loss", strength: "1mg", type: "weekly", packSize: 1, price: 139.99, perUnit: 139.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Pharmica", product: "Wegovy", category: "Weight Loss", strength: "1.7mg", type: "weekly", packSize: 1, price: 179.99, perUnit: 179.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Pharmica", product: "Wegovy", category: "Weight Loss", strength: "2.4mg", type: "weekly", packSize: 1, price: 249.99, perUnit: 249.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },

    // =============================================
    // NUMAN — Weight Loss (Mounjaro & Wegovy) - Subscription
    // =============================================

    // --- Numan Mounjaro (monthly subscription) ---
    { competitor: "Numan", product: "Mounjaro", category: "Weight Loss", strength: "2.5mg", type: "weekly", packSize: 1, price: 209.00, perUnit: 209.00, purchaseType: "subscription", brand: "Branded", unit: "pen (4 doses)", notes: "Monthly subscription. Includes clinical support." },
    { competitor: "Numan", product: "Mounjaro", category: "Weight Loss", strength: "5mg", type: "weekly", packSize: 1, price: 239.00, perUnit: 239.00, purchaseType: "subscription", brand: "Branded", unit: "pen (4 doses)", notes: "Monthly subscription" },
    { competitor: "Numan", product: "Mounjaro", category: "Weight Loss", strength: "7.5mg", type: "weekly", packSize: 1, price: 289.00, perUnit: 289.00, purchaseType: "subscription", brand: "Branded", unit: "pen (4 doses)", notes: "Monthly subscription" },
    { competitor: "Numan", product: "Mounjaro", category: "Weight Loss", strength: "10mg", type: "weekly", packSize: 1, price: 309.00, perUnit: 309.00, purchaseType: "subscription", brand: "Branded", unit: "pen (4 doses)", notes: "Monthly subscription" },
    { competitor: "Numan", product: "Mounjaro", category: "Weight Loss", strength: "12.5mg", type: "weekly", packSize: 1, price: 329.00, perUnit: 329.00, purchaseType: "subscription", brand: "Branded", unit: "pen (4 doses)", notes: "Monthly subscription" },
    { competitor: "Numan", product: "Mounjaro", category: "Weight Loss", strength: "15mg", type: "weekly", packSize: 1, price: 339.00, perUnit: 339.00, purchaseType: "subscription", brand: "Branded", unit: "pen (4 doses)", notes: "Monthly subscription" },

    // --- Numan Wegovy (monthly subscription) ---
    { competitor: "Numan", product: "Wegovy", category: "Weight Loss", strength: "0.25mg", type: "weekly", packSize: 1, price: 129.00, perUnit: 129.00, purchaseType: "subscription", brand: "Branded", unit: "pen (4 doses)", notes: "Monthly subscription" },
    { competitor: "Numan", product: "Wegovy", category: "Weight Loss", strength: "0.5mg", type: "weekly", packSize: 1, price: 159.00, perUnit: 159.00, purchaseType: "subscription", brand: "Branded", unit: "pen (4 doses)", notes: "Monthly subscription" },
    { competitor: "Numan", product: "Wegovy", category: "Weight Loss", strength: "1mg", type: "weekly", packSize: 1, price: 179.00, perUnit: 179.00, purchaseType: "subscription", brand: "Branded", unit: "pen (4 doses)", notes: "Monthly subscription" },
    { competitor: "Numan", product: "Wegovy", category: "Weight Loss", strength: "1.7mg", type: "weekly", packSize: 1, price: 209.00, perUnit: 209.00, purchaseType: "subscription", brand: "Branded", unit: "pen (4 doses)", notes: "Monthly subscription" },
    { competitor: "Numan", product: "Wegovy", category: "Weight Loss", strength: "2.4mg", type: "weekly", packSize: 1, price: 229.00, perUnit: 229.00, purchaseType: "subscription", brand: "Branded", unit: "pen (4 doses)", notes: "Monthly subscription" },

    // =============================================
    // OUSHK PHARMACY — Weight Loss + Hair Loss
    // =============================================

    // --- Oushk Mounjaro ---
    { competitor: "Oushk Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "2.5mg", type: "weekly", packSize: 1, price: 169.00, perUnit: 169.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oushk Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "5mg", type: "weekly", packSize: 1, price: 189.00, perUnit: 189.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oushk Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "7.5mg", type: "weekly", packSize: 1, price: 244.00, perUnit: 244.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oushk Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "10mg", type: "weekly", packSize: 1, price: 279.00, perUnit: 279.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oushk Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "12.5mg", type: "weekly", packSize: 1, price: 290.00, perUnit: 290.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oushk Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "15mg", type: "weekly", packSize: 1, price: 310.00, perUnit: 310.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },

    // --- Oushk Wegovy ---
    { competitor: "Oushk Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "0.25mg", type: "weekly", packSize: 1, price: 125.00, perUnit: 125.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oushk Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "0.5mg", type: "weekly", packSize: 1, price: 129.00, perUnit: 129.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oushk Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "1mg", type: "weekly", packSize: 1, price: 139.00, perUnit: 139.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oushk Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "1.7mg", type: "weekly", packSize: 1, price: 179.00, perUnit: 179.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oushk Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "2.4mg", type: "weekly", packSize: 1, price: 199.00, perUnit: 199.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },

    // --- Oushk Finasteride ---
    { competitor: "Oushk Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 13.95, perUnit: 0.50, purchaseType: "one-time", brand: "Generic", unit: "tablet" },
    { competitor: "Oushk Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 35.99, perUnit: 0.43, purchaseType: "one-time", brand: "Generic", unit: "tablet" },

    // =============================================
    // MANUAL — Updated pricing
    // =============================================

    // --- Manual Finasteride (subscription) ---
    { competitor: "Manual", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 72.00, perUnit: 0.86, purchaseType: "subscription", brand: "Generic", unit: "tablet", notes: "3-month plan £24/mo. Save 40%." },
    { competitor: "Manual", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 168, price: 108.00, perUnit: 0.64, purchaseType: "subscription", brand: "Generic", unit: "tablet", notes: "6-month plan £18/mo. Save 43%. First 6 months £108." },

    // =============================================
    // LLOYDS PHARMACY ONLINE DOCTOR
    // =============================================

    // --- Lloyds Sildenafil 25mg One-Time ---
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 4, price: 16.00, perUnit: 4.00, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 8, price: 24.00, perUnit: 3.00, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 16, price: 45.00, perUnit: 2.81, purchaseType: "one-time", brand: "Generic" },

    // --- Lloyds Sildenafil 50mg One-Time ---
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 15.00, perUnit: 3.75, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 28.00, perUnit: 3.50, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 44.99, perUnit: 2.81, purchaseType: "one-time", brand: "Generic" },

    // --- Lloyds Sildenafil 50mg Subscription ---
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 12.75, perUnit: 3.19, purchaseType: "subscription", brand: "Generic", notes: "15% off subscription" },
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 23.80, perUnit: 2.98, purchaseType: "subscription", brand: "Generic", notes: "15% off subscription" },
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 38.24, perUnit: 2.39, purchaseType: "subscription", brand: "Generic", notes: "15% off subscription" },

    // --- Lloyds Sildenafil 100mg One-Time ---
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 25.00, perUnit: 6.25, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 35.00, perUnit: 4.38, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 60.00, perUnit: 3.75, purchaseType: "one-time", brand: "Generic" },

    // --- Lloyds Sildenafil 100mg Subscription ---
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 21.25, perUnit: 5.31, purchaseType: "subscription", brand: "Generic", notes: "15% off subscription" },
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 29.00, perUnit: 3.63, purchaseType: "subscription", brand: "Generic", notes: "15% off subscription" },
    { competitor: "Lloyds Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 51.00, perUnit: 3.19, purchaseType: "subscription", brand: "Generic", notes: "15% off subscription" },

    // --- Lloyds Tadalafil 10mg One-Time ---
    { competitor: "Lloyds Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 4, price: 25.00, perUnit: 6.25, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Lloyds Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 8, price: 38.00, perUnit: 4.75, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Lloyds Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 16, price: 62.00, perUnit: 3.88, purchaseType: "one-time", brand: "Generic" },

    // --- Lloyds Tadalafil 10mg Subscription ---
    { competitor: "Lloyds Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 4, price: 21.00, perUnit: 5.25, purchaseType: "subscription", brand: "Generic", notes: "15% off subscription" },
    { competitor: "Lloyds Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 8, price: 32.00, perUnit: 4.00, purchaseType: "subscription", brand: "Generic", notes: "15% off subscription" },
    { competitor: "Lloyds Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 16, price: 52.00, perUnit: 3.25, purchaseType: "subscription", brand: "Generic", notes: "15% off subscription" },

    // --- Lloyds Tadalafil 20mg One-Time ---
    { competitor: "Lloyds Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 4, price: 28.00, perUnit: 7.00, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Lloyds Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 8, price: 50.00, perUnit: 6.25, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Lloyds Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 16, price: 75.00, perUnit: 4.69, purchaseType: "one-time", brand: "Generic" },

    // --- Lloyds Tadalafil 20mg Subscription ---
    { competitor: "Lloyds Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 4, price: 23.00, perUnit: 5.75, purchaseType: "subscription", brand: "Generic", notes: "15% off subscription" },
    { competitor: "Lloyds Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 8, price: 42.00, perUnit: 5.25, purchaseType: "subscription", brand: "Generic", notes: "15% off subscription" },
    { competitor: "Lloyds Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 16, price: 63.00, perUnit: 3.94, purchaseType: "subscription", brand: "Generic", notes: "15% off subscription" },

    // --- Lloyds Tadalafil Daily One-Time ---
    { competitor: "Lloyds Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 28, price: 48.00, perUnit: 1.71, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Lloyds Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 28, price: 55.00, perUnit: 1.96, purchaseType: "one-time", brand: "Generic" },

    // --- Lloyds Tadalafil Daily Subscription ---
    { competitor: "Lloyds Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 28, price: 40.00, perUnit: 1.43, purchaseType: "subscription", brand: "Generic", notes: "15% off subscription" },
    { competitor: "Lloyds Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 28, price: 46.00, perUnit: 1.64, purchaseType: "subscription", brand: "Generic", notes: "15% off subscription" },

    // --- Lloyds Spedra One-Time ---
    { competitor: "Lloyds Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 28.00, perUnit: 7.00, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Lloyds Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 46.00, perUnit: 5.75, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Lloyds Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 81.00, perUnit: 5.06, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Lloyds Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 34.00, perUnit: 8.50, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Lloyds Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 55.00, perUnit: 6.88, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Lloyds Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 99.00, perUnit: 6.19, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Lloyds Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 4, price: 43.00, perUnit: 10.75, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Lloyds Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 8, price: 75.00, perUnit: 9.38, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Lloyds Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 16, price: 139.00, perUnit: 8.69, purchaseType: "one-time", brand: "Branded" },

    // --- Lloyds Viagra Connect One-Time ---
    { competitor: "Lloyds Pharmacy", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 21.95, perUnit: 5.49, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Lloyds Pharmacy", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 37.99, perUnit: 4.75, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Lloyds Pharmacy", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 12, price: 56.00, perUnit: 4.67, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Lloyds Pharmacy", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 73.50, perUnit: 4.59, purchaseType: "one-time", brand: "Branded" },

    // --- Lloyds Priligy One-Time ---
    { competitor: "Lloyds Pharmacy", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "on-demand", packSize: 3, price: 28.00, perUnit: 9.33, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Lloyds Pharmacy", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "on-demand", packSize: 6, price: 52.00, perUnit: 8.67, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Lloyds Pharmacy", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "on-demand", packSize: 12, price: 95.00, perUnit: 7.92, purchaseType: "one-time", brand: "Branded" },

    // --- Lloyds Finasteride One-Time ---
    { competitor: "Lloyds Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 34.00, perUnit: 1.21, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Lloyds Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 56, price: 65.00, perUnit: 1.16, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Lloyds Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 95.00, perUnit: 1.13, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Lloyds Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 168, price: 163.00, perUnit: 0.97, purchaseType: "one-time", brand: "Generic" },

    // --- Lloyds Finasteride Subscription ---
    { competitor: "Lloyds Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 28.00, perUnit: 1.00, purchaseType: "subscription", brand: "Generic", notes: "~15% off subscription" },
    { competitor: "Lloyds Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 56, price: 55.00, perUnit: 0.98, purchaseType: "subscription", brand: "Generic", notes: "~15% off subscription" },
    { competitor: "Lloyds Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 80.00, perUnit: 0.95, purchaseType: "subscription", brand: "Generic", notes: "~15% off subscription" },
    { competitor: "Lloyds Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 168, price: 138.00, perUnit: 0.82, purchaseType: "subscription", brand: "Generic", notes: "~15% off subscription" },

    // --- Lloyds Mounjaro (1 pen / 4 weeks supply) ---
    { competitor: "Lloyds Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "2.5mg", type: "weekly", packSize: 1, price: 179.99, perUnit: 179.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)", notes: "+£99.99 consultation fee (£69.99 with START30)" },
    { competitor: "Lloyds Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "5mg", type: "weekly", packSize: 1, price: 189.99, perUnit: 189.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)", notes: "+consultation fee" },
    { competitor: "Lloyds Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "7.5mg", type: "weekly", packSize: 1, price: 249.99, perUnit: 249.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)", notes: "+consultation fee" },
    { competitor: "Lloyds Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "10mg", type: "weekly", packSize: 1, price: 279.99, perUnit: 279.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)", notes: "+consultation fee" },
    { competitor: "Lloyds Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "12.5mg", type: "weekly", packSize: 1, price: 299.99, perUnit: 299.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)", notes: "+consultation fee" },
    { competitor: "Lloyds Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "15mg", type: "weekly", packSize: 1, price: 309.99, perUnit: 309.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)", notes: "+consultation fee" },

    // --- Lloyds Wegovy (1 pen / 4 weeks supply) ---
    { competitor: "Lloyds Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "0.25mg", type: "weekly", packSize: 1, price: 99.99, perUnit: 99.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)", notes: "+consultation fee" },
    { competitor: "Lloyds Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "0.5mg", type: "weekly", packSize: 1, price: 119.99, perUnit: 119.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)", notes: "+consultation fee" },
    { competitor: "Lloyds Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "1mg", type: "weekly", packSize: 1, price: 149.99, perUnit: 149.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)", notes: "+consultation fee" },
    { competitor: "Lloyds Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "1.7mg", type: "weekly", packSize: 1, price: 179.99, perUnit: 179.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)", notes: "+consultation fee" },
    { competitor: "Lloyds Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "2.4mg", type: "weekly", packSize: 1, price: 199.99, perUnit: 199.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)", notes: "+consultation fee" },

    // =============================================
    // BOOTS ONLINE DOCTOR
    // =============================================

    // --- Boots Sildenafil One-Time ---
    { competitor: "Boots", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 4, price: 16.00, perUnit: 4.00, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 8, price: 24.00, perUnit: 3.00, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 16, price: 45.00, perUnit: 2.81, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 15.00, perUnit: 3.75, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 28.00, perUnit: 3.50, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 45.00, perUnit: 2.81, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 25.00, perUnit: 6.25, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 35.00, perUnit: 4.38, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 56.00, perUnit: 3.50, purchaseType: "one-time", brand: "Generic" },

    // --- Boots Tadalafil One-Time ---
    { competitor: "Boots", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 4, price: 17.00, perUnit: 4.25, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 8, price: 30.00, perUnit: 3.75, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 16, price: 50.00, perUnit: 3.13, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 4, price: 28.00, perUnit: 7.00, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 8, price: 50.00, perUnit: 6.25, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 16, price: 75.00, perUnit: 4.69, purchaseType: "one-time", brand: "Generic" },

    // --- Boots Tadalafil Daily ---
    { competitor: "Boots", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 28, price: 48.00, perUnit: 1.71, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 56, price: 88.00, perUnit: 1.57, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 84, price: 124.00, perUnit: 1.48, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 28, price: 55.00, perUnit: 1.96, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 56, price: 100.00, perUnit: 1.79, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 84, price: 145.00, perUnit: 1.73, purchaseType: "one-time", brand: "Generic" },

    // --- Boots Spedra One-Time ---
    { competitor: "Boots", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 28.00, perUnit: 7.00, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Boots", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 46.00, perUnit: 5.75, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Boots", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 81.00, perUnit: 5.06, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Boots", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 34.00, perUnit: 8.50, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Boots", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 55.00, perUnit: 6.88, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Boots", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 99.00, perUnit: 6.19, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Boots", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 4, price: 43.00, perUnit: 10.75, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Boots", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 8, price: 75.00, perUnit: 9.38, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Boots", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 16, price: 139.00, perUnit: 8.69, purchaseType: "one-time", brand: "Branded" },

    // --- Boots Viagra Connect ---
    { competitor: "Boots", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 22.99, perUnit: 5.75, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Boots", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 38.99, perUnit: 4.87, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Boots", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 64.99, perUnit: 4.06, purchaseType: "one-time", brand: "Branded" },

    // --- Boots Finasteride ---
    { competitor: "Boots", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 28.00, perUnit: 1.00, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 56, price: 55.00, perUnit: 0.98, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 80.00, perUnit: 0.95, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Boots", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 168, price: 138.00, perUnit: 0.82, purchaseType: "one-time", brand: "Generic" },

    // --- Boots Mounjaro ---
    { competitor: "Boots", product: "Mounjaro", category: "Weight Loss", strength: "2.5mg", type: "weekly", packSize: 1, price: 176.97, perUnit: 176.97, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)", notes: "Click & collect available at Boots stores" },
    { competitor: "Boots", product: "Mounjaro", category: "Weight Loss", strength: "5mg", type: "weekly", packSize: 1, price: 189.97, perUnit: 189.97, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Boots", product: "Mounjaro", category: "Weight Loss", strength: "7.5mg", type: "weekly", packSize: 1, price: 267.97, perUnit: 267.97, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Boots", product: "Mounjaro", category: "Weight Loss", strength: "10mg", type: "weekly", packSize: 1, price: 302.97, perUnit: 302.97, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Boots", product: "Mounjaro", category: "Weight Loss", strength: "12.5mg", type: "weekly", packSize: 1, price: 314.97, perUnit: 314.97, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Boots", product: "Mounjaro", category: "Weight Loss", strength: "15mg", type: "weekly", packSize: 1, price: 334.97, perUnit: 334.97, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },

    // --- Boots Wegovy ---
    { competitor: "Boots", product: "Wegovy", category: "Weight Loss", strength: "0.25mg", type: "weekly", packSize: 1, price: 99.97, perUnit: 99.97, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Boots", product: "Wegovy", category: "Weight Loss", strength: "0.5mg", type: "weekly", packSize: 1, price: 119.97, perUnit: 119.97, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Boots", product: "Wegovy", category: "Weight Loss", strength: "1mg", type: "weekly", packSize: 1, price: 166.97, perUnit: 166.97, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Boots", product: "Wegovy", category: "Weight Loss", strength: "1.7mg", type: "weekly", packSize: 1, price: 192.97, perUnit: 192.97, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Boots", product: "Wegovy", category: "Weight Loss", strength: "2.4mg", type: "weekly", packSize: 1, price: 205.97, perUnit: 205.97, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },

    // =============================================
    // THE INDEPENDENT PHARMACY
    // =============================================

    // --- Indep. Pharmacy Sildenafil 25mg ---
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 4, price: 5.85, perUnit: 1.46, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 8, price: 9.46, perUnit: 1.18, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 16, price: 17.20, perUnit: 1.07, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 32, price: 32.00, perUnit: 1.00, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 64, price: 52.80, perUnit: 0.82, purchaseType: "one-time", brand: "Generic" },

    // --- Indep. Pharmacy Sildenafil 50mg ---
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 7.39, perUnit: 1.84, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 13.80, perUnit: 1.72, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 22.80, perUnit: 1.42, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 32, price: 41.36, perUnit: 1.29, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 64, price: 63.68, perUnit: 0.99, purchaseType: "one-time", brand: "Generic" },

    // --- Indep. Pharmacy Sildenafil 100mg ---
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 8.15, perUnit: 2.03, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 14.90, perUnit: 1.86, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 25.88, perUnit: 1.61, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 32, price: 49.04, perUnit: 1.53, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 64, price: 69.60, perUnit: 1.07, purchaseType: "one-time", brand: "Generic" },

    // --- Indep. Pharmacy Tadalafil 10mg ---
    { competitor: "The Independent Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 4, price: 8.89, perUnit: 2.22, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 8, price: 14.90, perUnit: 1.86, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 16, price: 24.96, perUnit: 1.56, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 32, price: 43.60, perUnit: 1.36, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 64, price: 74.40, perUnit: 1.16, purchaseType: "one-time", brand: "Generic" },

    // --- Indep. Pharmacy Tadalafil 20mg ---
    { competitor: "The Independent Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 4, price: 8.45, perUnit: 2.11, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 8, price: 14.40, perUnit: 1.80, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 16, price: 24.96, perUnit: 1.56, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 32, price: 44.88, perUnit: 1.40, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 64, price: 74.40, perUnit: 1.16, purchaseType: "one-time", brand: "Generic" },

    // --- Indep. Pharmacy Tadalafil Daily ---
    { competitor: "The Independent Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 28, price: 19.39, perUnit: 0.69, purchaseType: "one-time", brand: "Generic", notes: "Starting from price" },

    // --- Indep. Pharmacy Spedra ---
    { competitor: "The Independent Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 27.50, perUnit: 6.88, purchaseType: "one-time", brand: "Branded" },
    { competitor: "The Independent Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 49.00, perUnit: 6.13, purchaseType: "one-time", brand: "Branded" },
    { competitor: "The Independent Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 88.00, perUnit: 5.50, purchaseType: "one-time", brand: "Branded" },
    { competitor: "The Independent Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 32.50, perUnit: 8.13, purchaseType: "one-time", brand: "Branded" },
    { competitor: "The Independent Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 60.00, perUnit: 7.50, purchaseType: "one-time", brand: "Branded" },
    { competitor: "The Independent Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 104.00, perUnit: 6.50, purchaseType: "one-time", brand: "Branded" },
    { competitor: "The Independent Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 4, price: 42.00, perUnit: 10.50, purchaseType: "one-time", brand: "Branded" },
    { competitor: "The Independent Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 8, price: 74.00, perUnit: 9.25, purchaseType: "one-time", brand: "Branded" },
    { competitor: "The Independent Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 16, price: 141.00, perUnit: 8.81, purchaseType: "one-time", brand: "Branded" },

    // --- Indep. Pharmacy Viagra Connect ---
    { competitor: "The Independent Pharmacy", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 19.99, perUnit: 5.00, purchaseType: "one-time", brand: "Branded" },
    { competitor: "The Independent Pharmacy", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 34.98, perUnit: 4.37, purchaseType: "one-time", brand: "Branded" },
    { competitor: "The Independent Pharmacy", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 65.96, perUnit: 4.12, purchaseType: "one-time", brand: "Branded" },

    // --- Indep. Pharmacy Finasteride ---
    { competitor: "The Independent Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 13.89, perUnit: 0.50, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 56, price: 21.68, perUnit: 0.39, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 29.88, perUnit: 0.36, purchaseType: "one-time", brand: "Generic" },
    { competitor: "The Independent Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 168, price: 49.86, perUnit: 0.30, purchaseType: "one-time", brand: "Generic" },

    // --- Indep. Pharmacy Priligy ---
    { competitor: "The Independent Pharmacy", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "on-demand", packSize: 3, price: 26.50, perUnit: 8.83, purchaseType: "one-time", brand: "Branded", notes: "Starting from price" },

    // --- Indep. Pharmacy Mounjaro ---
    { competitor: "The Independent Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "2.5mg", type: "weekly", packSize: 1, price: 179.99, perUnit: 179.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)", notes: "Starting from price, per-strength behind consultation" },

    // --- Indep. Pharmacy Wegovy ---
    { competitor: "The Independent Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "0.25mg", type: "weekly", packSize: 1, price: 104.99, perUnit: 104.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)", notes: "Starting from price" },

    // =============================================
    // OXFORD ONLINE PHARMACY
    // =============================================

    // --- Oxford Sildenafil 25mg ---
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 4, price: 5.89, perUnit: 1.47, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 8, price: 9.49, perUnit: 1.19, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 16, price: 14.98, perUnit: 0.94, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 32, price: 31.99, perUnit: 1.00, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 64, price: 45.49, perUnit: 0.71, purchaseType: "one-time", brand: "Generic" },

    // --- Oxford Sildenafil 50mg ---
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 8.19, perUnit: 2.05, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 13.79, perUnit: 1.72, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 22.79, perUnit: 1.42, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 32, price: 41.35, perUnit: 1.29, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 64, price: 63.94, perUnit: 0.99, purchaseType: "one-time", brand: "Generic" },

    // --- Oxford Sildenafil 100mg ---
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 8.19, perUnit: 2.05, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 14.89, perUnit: 1.86, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 25.85, perUnit: 1.62, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 32, price: 41.98, perUnit: 1.31, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 64, price: 69.98, perUnit: 1.09, purchaseType: "one-time", brand: "Generic" },

    // --- Oxford Tadalafil (as-needed) ---
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 4, price: 8.95, perUnit: 2.24, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 8, price: 14.97, perUnit: 1.87, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 16, price: 24.95, perUnit: 1.56, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 32, price: 43.59, perUnit: 1.36, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 64, price: 74.94, perUnit: 1.17, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 4, price: 9.49, perUnit: 2.37, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 8, price: 14.89, perUnit: 1.86, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 16, price: 24.95, perUnit: 1.56, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 32, price: 44.87, perUnit: 1.40, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 64, price: 74.94, perUnit: 1.17, purchaseType: "one-time", brand: "Generic" },

    // --- Oxford Tadalafil Daily ---
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 28, price: 24.99, perUnit: 0.89, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 84, price: 62.95, perUnit: 0.75, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 28, price: 19.35, perUnit: 0.69, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 84, price: 47.39, perUnit: 0.56, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 168, price: 93.45, perUnit: 0.56, purchaseType: "one-time", brand: "Generic" },

    // --- Oxford Spedra ---
    { competitor: "Oxford Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 18.49, perUnit: 4.62, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Oxford Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 29.94, perUnit: 3.74, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Oxford Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 20.94, perUnit: 5.24, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Oxford Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 39.49, perUnit: 4.94, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Oxford Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 4, price: 29.94, perUnit: 7.49, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Oxford Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 8, price: 57.94, perUnit: 7.24, purchaseType: "one-time", brand: "Branded" },

    // --- Oxford Viagra Connect ---
    { competitor: "Oxford Online Pharmacy", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 26.38, perUnit: 6.60, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Oxford Online Pharmacy", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 44.39, perUnit: 5.55, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Oxford Online Pharmacy", product: "Viagra Connect", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 83.99, perUnit: 5.25, purchaseType: "one-time", brand: "Branded" },

    // --- Oxford Finasteride ---
    { competitor: "Oxford Online Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 13.88, perUnit: 0.50, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 56, price: 21.67, perUnit: 0.39, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 29.87, perUnit: 0.36, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Oxford Online Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 168, price: 49.85, perUnit: 0.30, purchaseType: "one-time", brand: "Generic" },

    // --- Oxford Mounjaro ---
    { competitor: "Oxford Online Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "2.5mg", type: "weekly", packSize: 1, price: 149.99, perUnit: 149.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oxford Online Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "5mg", type: "weekly", packSize: 1, price: 188.96, perUnit: 188.96, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oxford Online Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "7.5mg", type: "weekly", packSize: 1, price: 248.96, perUnit: 248.96, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oxford Online Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "10mg", type: "weekly", packSize: 1, price: 278.96, perUnit: 278.96, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oxford Online Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "12.5mg", type: "weekly", packSize: 1, price: 289.98, perUnit: 289.98, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oxford Online Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "15mg", type: "weekly", packSize: 1, price: 298.96, perUnit: 298.96, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },

    // --- Oxford Wegovy ---
    { competitor: "Oxford Online Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "0.25mg", type: "weekly", packSize: 1, price: 99.99, perUnit: 99.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oxford Online Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "0.5mg", type: "weekly", packSize: 1, price: 118.96, perUnit: 118.96, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oxford Online Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "1mg", type: "weekly", packSize: 1, price: 144.98, perUnit: 144.98, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oxford Online Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "1.7mg", type: "weekly", packSize: 1, price: 168.99, perUnit: 168.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Oxford Online Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "2.4mg", type: "weekly", packSize: 1, price: 188.99, perUnit: 188.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },

    // =============================================
    // SIMPLE ONLINE PHARMACY
    // =============================================

    // --- Simple Online Sildenafil 25mg ---
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 4, price: 5.89, perUnit: 1.47, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 8, price: 9.49, perUnit: 1.19, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 16, price: 17.19, perUnit: 1.07, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 32, price: 32.49, perUnit: 1.02, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "25mg", type: "on-demand", packSize: 64, price: 45.50, perUnit: 0.71, purchaseType: "one-time", brand: "Generic" },

    // --- Simple Online Sildenafil 50mg ---
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 7.49, perUnit: 1.87, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 13.89, perUnit: 1.74, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 23.00, perUnit: 1.44, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 32, price: 44.00, perUnit: 1.38, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 64, price: 63.95, perUnit: 1.00, purchaseType: "one-time", brand: "Generic" },

    // --- Simple Online Sildenafil 100mg ---
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 8.19, perUnit: 2.05, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 15.24, perUnit: 1.91, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 25.99, perUnit: 1.62, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 32, price: 42.95, perUnit: 1.34, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Sildenafil", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 64, price: 71.95, perUnit: 1.12, purchaseType: "one-time", brand: "Generic" },

    // --- Simple Online Tadalafil ---
    { competitor: "Simple Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 4, price: 8.95, perUnit: 2.24, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 8, price: 15.95, perUnit: 1.99, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 16, price: 25.45, perUnit: 1.59, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 32, price: 43.95, perUnit: 1.37, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "10mg", type: "on-demand", packSize: 64, price: 74.95, perUnit: 1.17, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 4, price: 9.75, perUnit: 2.44, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 8, price: 15.95, perUnit: 1.99, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 16, price: 28.45, perUnit: 1.78, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 32, price: 53.95, perUnit: 1.69, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Tadalafil", category: "Erectile Dysfunction", strength: "20mg", type: "on-demand", packSize: 64, price: 74.95, perUnit: 1.17, purchaseType: "one-time", brand: "Generic" },

    // --- Simple Online Tadalafil Daily ---
    { competitor: "Simple Online Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 28, price: 19.85, perUnit: 0.71, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 56, price: 38.50, perUnit: 0.69, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "2.5mg", type: "daily", packSize: 84, price: 56.50, perUnit: 0.67, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 28, price: 22.85, perUnit: 0.82, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 56, price: 44.85, perUnit: 0.80, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Tadalafil Daily", category: "Erectile Dysfunction", strength: "5mg", type: "daily", packSize: 84, price: 66.95, perUnit: 0.80, purchaseType: "one-time", brand: "Generic" },

    // --- Simple Online Spedra ---
    { competitor: "Simple Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 4, price: 19.99, perUnit: 5.00, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Simple Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 8, price: 29.95, perUnit: 3.74, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Simple Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "50mg", type: "on-demand", packSize: 16, price: 49.99, perUnit: 3.12, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Simple Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 4, price: 20.95, perUnit: 5.24, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Simple Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 8, price: 39.50, perUnit: 4.94, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Simple Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "100mg", type: "on-demand", packSize: 16, price: 74.50, perUnit: 4.66, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Simple Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 4, price: 29.95, perUnit: 7.49, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Simple Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 8, price: 57.95, perUnit: 7.24, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Simple Online Pharmacy", product: "Spedra", category: "Erectile Dysfunction", strength: "200mg", type: "on-demand", packSize: 16, price: 99.50, perUnit: 6.22, purchaseType: "one-time", brand: "Branded" },

    // --- Simple Online Finasteride ---
    { competitor: "Simple Online Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 28, price: 13.95, perUnit: 0.50, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 56, price: 23.45, perUnit: 0.42, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 84, price: 32.95, perUnit: 0.39, purchaseType: "one-time", brand: "Generic" },
    { competitor: "Simple Online Pharmacy", product: "Finasteride", category: "Hair Loss", strength: "1mg", type: "daily", packSize: 168, price: 54.95, perUnit: 0.33, purchaseType: "one-time", brand: "Generic" },

    // --- Simple Online Priligy ---
    { competitor: "Simple Online Pharmacy", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "on-demand", packSize: 3, price: 21.49, perUnit: 7.16, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Simple Online Pharmacy", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "on-demand", packSize: 6, price: 39.99, perUnit: 6.67, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Simple Online Pharmacy", product: "Priligy", category: "Premature Ejaculation", strength: "30mg", type: "on-demand", packSize: 12, price: 72.99, perUnit: 6.08, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Simple Online Pharmacy", product: "Priligy", category: "Premature Ejaculation", strength: "60mg", type: "on-demand", packSize: 3, price: 30.99, perUnit: 10.33, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Simple Online Pharmacy", product: "Priligy", category: "Premature Ejaculation", strength: "60mg", type: "on-demand", packSize: 6, price: 52.99, perUnit: 8.83, purchaseType: "one-time", brand: "Branded" },
    { competitor: "Simple Online Pharmacy", product: "Priligy", category: "Premature Ejaculation", strength: "60mg", type: "on-demand", packSize: 12, price: 92.99, perUnit: 7.75, purchaseType: "one-time", brand: "Branded" },

    // --- Simple Online Mounjaro ---
    { competitor: "Simple Online Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "2.5mg", type: "weekly", packSize: 1, price: 169.00, perUnit: 169.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Simple Online Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "5mg", type: "weekly", packSize: 1, price: 199.99, perUnit: 199.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Simple Online Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "7.5mg", type: "weekly", packSize: 1, price: 259.99, perUnit: 259.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Simple Online Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "10mg", type: "weekly", packSize: 1, price: 299.99, perUnit: 299.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Simple Online Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "12.5mg", type: "weekly", packSize: 1, price: 309.99, perUnit: 309.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Simple Online Pharmacy", product: "Mounjaro", category: "Weight Loss", strength: "15mg", type: "weekly", packSize: 1, price: 319.99, perUnit: 319.99, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },

    // --- Simple Online Wegovy ---
    { competitor: "Simple Online Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "0.25mg", type: "weekly", packSize: 1, price: 99.00, perUnit: 99.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Simple Online Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "0.5mg", type: "weekly", packSize: 1, price: 119.00, perUnit: 119.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Simple Online Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "1mg", type: "weekly", packSize: 1, price: 125.00, perUnit: 125.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Simple Online Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "1.7mg", type: "weekly", packSize: 1, price: 169.00, perUnit: 169.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },
    { competitor: "Simple Online Pharmacy", product: "Wegovy", category: "Weight Loss", strength: "2.4mg", type: "weekly", packSize: 1, price: 189.00, perUnit: 189.00, purchaseType: "one-time", brand: "Branded", unit: "pen (4 doses)" },

  ]
};
