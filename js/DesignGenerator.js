 function generateParagraph() {

                //Define client
                var clientType = ['private', 'government'];
                clientType = clientType[Math.floor(Math.random() * clientType.length)];
                

                //Define district from client binary
                if (clientType == 'private') {
                var pvtDistrict = ['commercial', 'research', 'housing', 'produce', 'energy', 'sports', 'education'];
                var districtType = pvtDistrict[Math.floor(Math.random() * pvtDistrict.length)];
            }

                if (clientType == 'government') {
                var gvmtDistrict = ['transport', 'recreational', 'infrastructure', 'office', 'health', 'law and security'];
                var districtType = gvmtDistrict[Math.floor(Math.random() * gvmtDistrict.length)];
            }
               

               //Define values for typology from district
                if (districtType == 'law and security' || 'education' || 'office') {
                var typology = 'medium density';
               

               } else if (districtType == 'recreational' || 'health' || 'produce'){
                var typologyNotHigh = ['low density', 'medium density'];
                var typology = typologyNotHigh[Math.floor(Math.random() * typologyNotHigh.length)];

               } else if (districtType == 'energy' || 'infrastructure') {
                var typologyNotLow = ['high density', 'medium density'];
                var typology = typologyNotLow[Math.floor(Math.random() * typologyNotLow.length)];

               } else {
                var typologyAll = ['low density', 'medium density', 'high density'];
                var typology = typologyAll[Math.floor(Math.random() * typologyAll.length)];
            }


               //Define commercial buildings from typology & district
                if (typology == 'high density' && districtType == 'commercial' ) {
                    var buildTypeList = ['skyscraper', 'center', 'casino'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'skyscraper'){
                        var flavour = [' bank ', ' telecommunications ', ' metropolitan '];
                    }else if (buildType == 'center'){
                        var flavour = ['n expo ', ' finance ', ' trade ', ' visitor ', ' convention '];
                    }else if  (buildType == 'casino'){
                        var flavour = ['n urban ', ' tower block '];
                    }
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;

                }
                if (typology == 'medium density' && districtType == 'commercial' ) {
                    var buildTypeList = ['facility', 'office block', 'outlet', 'studio'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'facility'){
                        var flavour = [' storage ', ' boating ', ' warehouse '];
                    }else if (buildType == 'office block'){
                        var flavour = [' software development ', ' technology retail ', 'n electronics and automotive services  ', 'n additive manufacturing ', 'n administration '];
                    }else if  (buildType == 'outlet'){
                        var flavour = [' commercial shopping ', ' clothing ', ' mobile ', 'n electronics ', 'n office supplies ', ' pharmaceutical '];
                    }else if  (buildType == 'studio'){
                        var flavour = [' game development ', ' music production ', ' design ', 'n architecture ', 'n arts ', ' software development ', ' fashion design ', ' photography '];
                    }
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;

                }
                 if (typology == 'low density' && districtType == 'commercial') {
                    var buildTypeList = ['restaurant', 'club', 'cafe', 'station', 'pier', 'bank'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                     if (buildType == 'restaurant'){
                        var flavour = [' mexican ', 'n italian ', ' chinese ', ' japanese ', 'n authentic thai ', ' indian ', ' fast food '];
                    }else if (buildType == 'club'){
                        var flavour = [' night ', ' lawn bowls ', ' surf '];
                    }else if  (buildType == 'cafe'){
                        var flavour = [' restaurant ', 'n urban ', ' suburban '];
                    }else if  (buildType == 'station'){
                        var flavour = [' petrol ', ' gas '];
                    }else if  (buildType == 'pier'){
                        var flavour = [' restaurant '];
                    }else if  (buildType == 'bank'){
                        var flavour = [' suburban ', ' municipal '];
                    }
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;


                    //research build types
                }
                 if (typology == 'high density' && districtType == 'research' ) {
                    var buildTypeList = ['observatory', 'institute'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'observatory'){
                        var flavour = [' rural ', ' state '];
                    }else if (buildType == 'institute'){
                        var flavour = ['n engineering ', ' medical record library ', ' quantum research '];
                    }
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;

                }
                if (typology == 'medium density' && districtType == 'research' ) {
                    var buildTypeList = ['research center', 'institution'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'research center'){
                        var flavour = [' weather analysis '];
                    }else if (buildType == 'institution'){
                        var flavour = [' robostics research ', 'n astronomy research ', ' seismology research ', ' marine conservation ', 'n astronautics '];
                    }
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;

                }
                 if (typology == 'low density' && districtType == 'research') {
                    var buildType = 'site';
                        var flavour = ['n air pressure analysis ', ' chemical laboratory '];
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;


                    //housing build types  
                }
                if (typology == 'high density' && districtType == 'housing' ) {
                    var buildTypeList = ['block', 'flat'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'block'){
                        var flavour = [' hotel block ', 'n apartment ', ' motel '];
                    }
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;

                }
                 if (typology == 'medium density' && districtType == 'housing' ) {
                    var buildType = 'block';
                    if (buildType == 'block'){
                        var flavour = ['n urban hotel ', 'n urban apartment ', ' motel ', ' residential ', 'n apartment ', 'n urban hotel '];
                    }
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;

                }
                 if (typology == 'low density' && districtType == 'housing') {
                    var buildTypeList = ['dwelling', 'home', 'house', 'dormitory'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'dwelling'){
                        var flavour = [' private ', ' residential '];
                    }else if (buildType == 'home'){
                        var flavour = ['n eldercare ', ' private ', ' suburban ', 'n urban '];
                    }else if (buildType == 'house'){
                        var flavour = [' lodging ', ' private '];
                    }else if (buildType == 'dormitory'){
                        var flavour = [' student ', 'n athlete ', ' on-campus '];
                    }
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;

                    //produce build types
                }
                 if (typology == 'low density' && districtType == 'produce' ) {
                    var buildType = 'farm';
                    var flavour = ['n agricultural ', 'n apricot ', 'banana ', ' vegtable ', ' fruit ', ' fish '];
                
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;

                }
                 if (typology == 'medium density' && districtType == 'produce') {
                    var buildTypeList = ['estate', 'abattoir'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)]; 
                    if (buildType == 'estate'){
                        var flavour = [' craft brew ', ' vintage winery '];
                    }else if (buildType == 'abbattoir'){
                        var flavour = [ ' rural '];
                    }
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;

                    //energy build types 
                }
                 if (typology == 'high density' && districtType == 'energy') {
                    var buildTypeList = ['plant', 'farm', 'refinery', 'rig', 'dam'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'plant'){
                        var flavour = ['n oil power ', ' coal power ', ' nuclear energy '];
                    }else if (buildType == 'farm'){
                        var flavour = [ 'wind ', ' solar '];
                    }else if (buildType == 'refinery'){
                        var flavour = [ 'n oil ', ' coal '];
                    }else if (buildType == 'rig'){
                        var flavour = [ 'n off-shore oil '];
                    }else if (buildType == 'dam'){
                        var flavour = [ ' hydroelectric '];
                    }
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;

                }
                if (typology == 'medium density' && districtType == 'energy') {
                    var buildType = 'plant';
                        var flavour = [ ' geothermal power ', 'n off-shore geothermal power', ' waste-to-energy incineration '];
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;

                //sports build types
                }
                 if (typology == 'medium density' && districtType == 'sports' ) {
                    var buildTypeList = ['field', 'lodge', 'rink', 'court'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'field') {
                        var flavour = [' football ', ' soccer '];
                    }else if (buildType == 'lodge'){
                        var flavour = [ ' clubhouse ', ' sporting ', ' martial arts '];
                        }else if (buildType == 'court'){
                        var flavour = [ ' tennis ', ' basketball court ', ' squash '];
                        }else if (buildType == 'rink'){
                        var flavour = [ ' skate ', 'n ice ', ' roller '];
                        }
                         var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType; 

                }
                 if (typology == 'high density' && districtType == 'sports' ) {
                    var buildType = 'stadium';
                    var flavour = [ ' international sports ', 'n olympic', ' commonwealth sports ', ' sports amphitheatre ', 'n esports '];
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;

                }
                 if (typology == 'low density' && districtType == 'sports'){
                    var buildTypeList = ['track', 'gym'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'track'){
                        var flavour = [' running '];
                    }else if (buildType == 'gym'){
                        var flavour = [ ' weightlifting ', 'n indoor swimming pool and '];
                        }
                         var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;  


                    //education build types
                }
                 if (typology == 'medium density' && districtType == 'education' ) {
                    var buildTypeList = ['institute', 'university', 'college', 'school'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'institute'){
                        var flavour = [' fine arts ', ' technology ', 'n engineering ', ' businness '];
                    }else if (buildType == 'university'){
                        var flavour = [ 'n open ', ' municipal ', 'urban ', ' royal ', 'n innercity '];
                        }else if (buildType == 'college'){
                        var flavour = [' technical ', ' private ', ' grammar ', ' royal '];
                        }else if (buildType == 'school'){
                        var flavour = [ ' special ', ' private elementary ', ' private ', ' suburban high '];
                        }
                         var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType; 


                    //Define government district transport types
                }
                 if (typology == 'high density' && districtType == 'transport' ) {
                    var buildType = 'airport';
                    var flavour = ['n international ', ' domestic '];
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType; 

                }
                if (typology == 'low density' && districtType == 'transport' ) {
                    var buildTypeList = ['station', 'pier'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'station'){
                        var flavour = [' train '];
                    }else if (buildType == 'pier'){
                        var flavour = [ ' ferry ', ' city cat '];
                        }
                         var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType; 

                }
                 if (typology == 'medium density' && districtType == 'transport' ) {
                    var buildTypeList = ['depot', 'station', 'hub'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'depot'){
                        var flavour = [' bus ', ' light-rail ', ' tram '];
                    }else if (buildType == 'station'){
                        var flavour = [ 'n intercity bus ', ' metro train '];
                        }else if (buildType == 'hub'){
                        var flavour = ['n intercity bus '];
                        }
                         var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType; 


                    //recreational build types
                }
                 if (typology == 'low density' && districtType == 'recreational' ) {
                    var buildType = 'park';
                    var flavour = [' skate ', ' public '];
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType; 

                }
                 if (typology == 'medium density' && districtType == 'recreational' ) {
                    var buildTypeList = ['enclosure', 'garden', 'theatre', 'library', 'gallery', 'museum'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'enclosure'){
                        var flavour = [' public amphibian ', ' public greenhouse ', ' public avery ', ' zoo ', 'n aquarium '];
                    }else if (buildType == 'garden'){
                        var flavour = [ ' public astronomy and botanical ', ' public ', ' city ', ' public butterfly '];
                        }else if (buildType == 'theatre'){
                        var flavour = [' performing arts ', ' cinema '];
                        }else if (buildType == 'library'){
                        var flavour = [ ' state ', ' national ', ' city '];
                        }else if (buildType == 'gallery'){
                        var flavour = [ ' geodesic dome and art ', ' portrait ', ' national art '];
                        }else if (buildType == 'museum'){
                        var flavour = [' history ', ' science ', ' heritage ', 'n aviation '];
                        }
                         var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;



                    //infrastructure build types
                }
                 if (typology == 'high density' && districtType == 'infrastructure' ) {
                    var buildType = 'harbour';
                    var flavour = [' cargo ', 'n import '];
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;


                }
                 if (typology == 'medium density' && districtType == 'infrastructure' ) {
                    var buildTypeList = ['plant', 'reservoir', 'station'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'plant'){
                        var flavour = [' chemical waste treatment ', 'sewage treatment ', ' water treatment ', ' recycling ', ' natural gas processing '];
                    }else if (buildType == 'reservoir'){
                        var flavour = [' water distillation ', ' chemical loading and stillwater '];
                        }else if (buildType == 'station'){
                        var flavour = [' boiler ', ' pumping ', ' city-limit garbage disposal ', ' fire and rescue ', ' helicopter depot and fire '];
                        }
                         var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;



                    //office build types
                }
                 if (typology == 'medium density' && districtType == 'office' ) {
                    var buildTypeList = ['hall', 'office', 'embassy', 'center'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'hall'){
                        var flavour = [' union ', ' town '];
                    }else if (buildType == 'office'){
                        var flavour = [' transport ', ' litigation processing '];
                        }else if (buildType == 'embassy'){
                        var flavour = ['n international relations '];
                        }else if (buildType == 'center'){
                        var flavour = [' public herborium and community ', ' community ', ' healthcare '];
                        }
                         var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;



                    //health build types
                }
                 if (typology == 'low density' && districtType == 'health' ) {
                    var buildType = 'cemetery';
                    var flavour = [' public ', ' suburbian '];
                    var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;
                    


                }
                 if (typology == 'medium density' && districtType == 'health' ) {
                    var buildTypeList = ['hospital', 'academy', 'office'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'hospital'){
                        var flavour = [' public ', ' royal '];
                    }else if (buildType == 'academy'){
                        var flavour = [' national surgeons ', 'n inner-city doctors '];
                        }else if (buildType == 'office'){
                        var flavour = [' doctors ', ' general doctors '];
                        }
                        var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;


                    //law and security build types
                }
                 if (typology == 'medium density' && districtType == 'law and security' ) {
                    var buildTypeList = ['center', 'department', 'depot', 'headquarters', 'law'];
                    var buildType = buildTypeList[Math.floor(Math.random() * buildTypeList.length)];
                    if (buildType == 'centre'){
                        var flavour = [' detention ', ' juvenile detention '];
                    }else if (buildType == 'department'){
                        var flavour = [' inland security ', ' police '];
                        }else if (buildType == 'depot'){
                        var flavour = [' police vehicle '];
                        }else if (buildType == 'headquarters'){
                        var flavour = [' police '];
                        }else if (buildType == 'law'){
                        var flavour = [' state court of ', ' court of '];
                        }
                        var building = flavour[Math.floor(Math.random() * flavour.length)] + buildType;

                }

               //Define useCase from districtType
                if (districtType == 'commercial'){
                var useCaseList = ['a pragmatic approach to building a new space for our community, by ensuring all open areas receive sunlight during the day and have ample static lighting for the night', 'a building that stands on the shoulders of the local history and incorporates classical styles and modern functionality into a hybrid architecture', 'an environmentally aware building with a focus on clarity and openness, revealing the exoskeleton of the framework by endorsing glass and steel as main materials', 'an open plan build which emphasises airflow and walkability yet conserves discreet spaces for staff', 'an urbanism driven ideal with walkability and ease of access to employees and pedestrians alike', 'a visitor and staff experience like no other, we would like an emphasis on eco-friendly, locally sourced materials while considering the building as part of a series of modular architectural pieces', 'a modern construction for a modern era which will raise public and corporate interest','a building which takes a fresh look at minimalism’s influences while keeping with a brutalist architecture concept', 'a minimalist finish to our building with easy access to the main features so that visitors are easily directed'];
                var useCase = useCaseList[Math.floor(Math.random() * useCaseList.length)];
               }
               if (districtType == 'research'){
                var useCaseList = ['a build that uses locally sourced materials and will serve as a monument to admire from within and without','a location for streamlined research operations. The build should take into account the local environment and use sustainable building materials for the entire construction','a palatable building making use of exotic imported wood and stone as a finish on a set of modular blocks in a modern style','a build which makes use of vertical beams in the outward appearance with emphasised open space leading into cloistered halls to occupy the staff on site','a modern facility to operate in, there should be ample room for work as well as relaxation by introducing airflow and green elevations','a formal modernist build consisting of a linear block with courtyards as a main feature','a sorted patchwork of spaces connected by skywalks, fit with ribbed shade beams and green shelving','a build that reflects an evolution from industry to bauhaus with cubic concrete blocks which fit haphazardly','a departure from contemporary neoclassical academic revival by subdividing the main spaces of the building into three separate structures, each with unique textiles and motifs that merge into one-another seamlessly. The walkways that connect each of the structures will coalesce into one another, and adopt traits of each yet still remain individual in their prospects and unique spaces in their own right. The main building should sport a U-bend elevation which opens onto an artificially shaded terrace that then follows through to the other buildings via skywalks and elevators'];
                var useCase = useCaseList[Math.floor(Math.random() * useCaseList.length)];

            }
               if (districtType == 'housing'){
                var useCaseList = ['a building that juxtaposes breaks in a cylindrical frame with external concrete pillars. From this a lifted plane should jut from the central space and wrap around to form a courtyard area to enclose the plan','an emerging prismic exterior which breaks down traditional segmentational norms and introduces an ecologically friendly rise of green beds to form a refreshing flow between indoor and outdoor space','a branching span of vertical buildup that connects an organised array of freestanding planar overhangs. The groundwork beneath stages a series of interconnected courtyards lush with greenery and ambient lighting effects to create an enchanting twilight experience','an ergonomic integration of corrugated iron and levelled concrete conforming to brutalist geometries. From a city block elevation, a range of angular staircases seamlessly descend into an atrium clearing beholding a centralised polished steel monument','a hybrid, open floor plan: fusing environmental circulation with self-engineered modernism to implement solar repurposing of natural daylight throughout the build. We would like the build to incorporate a cyclic hall system on each level that expands vertically above the foundations which orbit the main entrances','a concentric chassis which oscillates around the main fountain, striking off into concrete walkways padded with wrought iron installations. The walkways themselves lay into a grid of interior spaces which are each enclosed by oculus domes and feature prominent corridors between them','a newage portal which greets visitors before lunging them into a flurry of immovable beams which jut up through the main living spaces and disrupt the skyline. In this subterranean inspired dwelling the enclosure should emit an ambient glow from steel light fixtures which conform to the static environment. Several spiral staircases climb up through prismatic openings onto the centrally heated stone passageways which crawl throughout the main living spaces'];
                var useCase = useCaseList[Math.floor(Math.random() * useCaseList.length)];
            }

               if (districtType == 'produce'){
                var useCaseList = ['a fresh take on industry standard synthesis between the local environment and easily navigable spaces designed from the ground-up for community growth','a high tech build which takes advantage of our open plan’s natural sunlight and applies it to solar electricity solutions. For the main framework we would like a cylindrical enclosure and quadrangle attachment for storage and relaxation','a perforated walled enclosure which contains the main entrance and prominent geodesic build features. Upon entry to the site, visitors will make passageway under a bracketed overhang which oversees the main produce warehouse. Simple frameworks will jut from the walls and provide support to a corrugated roof cover to protect produce from contaminants','an ergonomic design focussed on accessibility and optimised movement around the space. We would like the build to bring to life the  clear and simple late modernist style. The build should include spaces for staff to relax, storage for tools and a large warehouse for loading equipment','an array of tanks to be placed close to the main working quarters so that extracts and produce may be stored for transport'];
                var useCase = useCaseList[Math.floor(Math.random() * useCaseList.length)];
            }

               if (districtType == 'energy'){
                var useCaseList = ['an innovative build, combining the best in industry practice with sleek design to deliver streamlined energy solutions for our clients. The architect should present a working knowledge of topological industry practice in order for their design to be considered','a build which has a focus on economical materials and frameworks. The site design will need to have large areas for inception points for collection and distribution of energy systems, along with spaces for general maintenance and storage','an active assessment of the industry coalesced into a primary distribution centre for the collected resources. A distribution office, vehicle bay, and administration building will be necessary for onsite staff and technicians','an ergonomic build site with a process and distribution centre for the constellated energy system. An on-site technical office and maintenance storage should make it into the final build','a terminal centre of operations on the periphery of the site in order to quickly attend to maintenance and data collection via walkways and viewing platforms. Vehicles arriving on-site should have a main docking bay and staff offices relatively close by','a build featuring the infrastructure for clean energy runoff into a centralised export hub complete with guarded fencing and onsite offices. The main workflow of the site should incorporate ease of access to the site’s facilities and collection spaces'];
                var useCase = useCaseList[Math.floor(Math.random() * useCaseList.length)];
            }

               if (districtType == 'sports'){
                var useCaseList = ['a fresh take on the modern sporting arena. A nested pattern of metallic leaves and columns intertwined with cubic recesses will mark the outer walls of the main build. Framed passages and nestled booths are incorporated into the walkways around the traditional play-space design','a build which employs concrete and steel for the oval floorplan, and crosshatched beams to partially cover the enclosure','a testament to the strength and athleticism to be displayed by providing strong columns and walls withholding a vast open space within','an enveloped build pattern that folds obtuse prismatic scales down an inclined convex perimeter. The building floorplan should begin from a heptagon and should be recognisable from the final design frontier','a build with a barreled ceiling over the main exercise ground. Incorporating cubic amenities into the wall spaces','a lean building with accented pylons providing support to the main ribbed roofing panels. A thin band of walls taper off around the main field to an inception point, within such walls the main events will be held','a building which gives rise to concrete pillars, walls and brutalist structural juttings that enclose the venue. A park area surrounds the main venue with trees, shrubs and astroturf mounds for visitors to relax upon'];
                var useCase = useCaseList[Math.floor(Math.random() * useCaseList.length)];
            }

               if (districtType == 'education'){
                var useCaseList = ['an industrial style exterior for the build, traditional materials in use except for vibrant colour painted on a single element of the build. An outer pipe or wall for instance, which will give variance and draw intrigue','a building that indulges in exposed semipermanent prefabs which entice the curiosity of the onlooker, fit with sleek inner hallways as a juxtaposition against the intentionally confused and visually aggressive exterior','an open attempt to redefine bold: with a classic revisit to the art deco period. Fixed with harsh geometric ornamentation contorted into classical shapes, planes and arches, this build will incorporate a domed central chamber and a leading arch facade that sports a semi-circular window embedded beneath','a presentation that affords it as a shining beacon of learning, making use of marble and white concrete constructions interposed with double paned glass for economic heat retention and reflection. The build recalls Italian Renaissance palace and church designs, albeit with hooded windows that do not jut out beyond the tympanum and the courtyards have gardens seamless with the interior','a series of interlocking cylindrical chambers with ramps leading onto horizontal extruded stories that are topped with terraced gardens. The terraced layout will overhang beyond where the extrusions are bellowed from the central chambers'];
                var useCase = useCaseList[Math.floor(Math.random() * useCaseList.length)];
            }

               if (districtType == 'transport'){
                var useCaseList = ['a hive of core transition zones marked with red and gunmetal grey perforated panelling to break up the monochromatic use of steel, concrete and bitumen. The main intake sprawl and gated entry points command staging portals that provide momentum into the main chamber of the build. From here, a branching set of internal artery-like stairways and passages lead visitors throughout the complex','a build with a vast beachhead inspired edge, jutting out above the entry point. The slotted protrusion being furrowed with glass panelling. A lofted ceiling bares down from the entrance and inclines in its ascent over the amenity building and stained pillars','a building chassis consisting of cross beams which bear inflated characteristics of molecular prisms on their surfaces. As the only ornamental feature these beams should be visible throughout the build with delineated metal, stone and concrete forming the other main structural qualities. Those being the remaining walls, pillars and the entrance to the hyperwire system','a cubic "L" block standing as a central hub for this transport sect. The internal structure should aim to reduce acoustic noise pollution by use of installed prismatic vibration sinks. On the external structure we would like a sculpted cluster of pods, inspiration being taken from local floral seeds and flower buds','a design that integrates a series of cross-sectioned cubes that form the outer structure, one of which forms the main access points to the upper floor. This upper section has a terraced astroturf garden with a glass greenhouse dome and walls for visitors to relax under while they wait to travel or meet friends and loved ones','a build that incorporates open space and central lighting features which lead to accessible elevators and pathways. Roofing that appears to be in equilibrium as it rests on a row of tall steel columns that fray and stretch across the ceiling like iron trees will make for the centre of the design, with other vendors and spaces chosen around it'];
                var useCase = useCaseList[Math.floor(Math.random() * useCaseList.length)];
            }

               if (districtType == 'recreational'){
                var useCaseList = ['a venue to attract tourists and raise public affections','so that the members of the community have a place to relax and enjoy themselves','a scene to add to our city’s ever-growing culture','a constructed relaxation and community building venue','a construction that will implore visitors and residents to enjoy their local public spaces','a public space for people to congregate, relax and enjoy their local province','a build to appease the public at large'];
                var useCase = useCaseList[Math.floor(Math.random() * useCaseList.length)];
            }
            
               if (districtType == 'infrastructure'){
                var useCaseList = ['an innovative build, combining the best in industry practice with simple constructions that deliver streamlined solutions and workflow for our staff. The architect should present a working knowledge of topological industry practice within the field in order for their design to be considered','a build which has a focus on economical materials and frameworks. The site design will need to have large areas for inception points for collection, processing and distribution of product systems, along with spaces for general maintenance and storage','an active assessment of the industry coalesced into a primary distribution centre for the processed resources. A distribution office, vehicle bay, and administration building will be necessary for onsite staff and technicians','an ergonomic build site with a process and distribution centre for a swift dispersal and management system. An on-site technical office and maintenance storage should make it into the final build','a standard centre of operations on the periphery of the site in order to quickly attend to maintenance and data collection via walkways and viewing platforms. Vehicles arriving on-site should have a main docking bay and staff offices relatively close by','a build featuring the infrastructure for clean waste runoff into a centralised export hub complete with guarded fencing and onsite offices. The management team on site should have easy access to the site’s facilities and collection spaces'];
                var useCase = useCaseList[Math.floor(Math.random() * useCaseList.length)];
            }

               if (districtType == 'office'){
                var useCaseList = ['a central bureau building to elucidate and streamline official public affairs. The design will have the facade owed to neoclassical revival in white marble, open halls and breathable rooms introducing skylights and large upper windows displayed in the east and west wings','a build that utilises imported materials to arrive at a concluded office space. Efficient staff pathing to and from meeting and board spaces is necessary to introduce a streamlined experience for workers','a workplace from which communications and paperwork can be stored and processed efficiently'];
                var useCase = useCaseList[Math.floor(Math.random() * useCaseList.length)];
            }

               if (districtType == 'health'){
                var useCaseList = ['a new age building with emphasised external support structures that embraces textured walls, seamlessly flowing into riveted window frames. By allowing natural light into patient reception quarters we believe that this can lead to reduced recovery and processing times. Quick access to the road is a must for all vehicles, be it via parking or garage bays','a new build commemorating 100 years of medical office. The new building will be a reminisce to the art deco mid century external design. With hidden air conditioning ducts and piping to encourage an uninterrupted facade, thus reducing the amount of additions that need to be added to the exterior in the future','a build that takes into account the unstable ground of the build site. The location will be in a marshy buildup, and while efforts have been made to encourage stability, the final design needs to adhere to a structural element capable of providing the rest of the framework for the construction with a steady support. Admin and entrances should be easily accessible from the dropoff bay','an economic build taking influences from natural rock structures, mimicking them in the walled pathways leading up to the visitor’s entrance. These patterns are replicated on the outer walls and in the pillars supporting the roof overhangs. By using locally sourced stone and materials along with the textured walls the build will adhere to site heritage guidelines outlined by the local council','a build for local healthcare services aimed at efficient movement around the premises through the use of wide halls and large doorways according to health regulations'];
                var useCase = useCaseList[Math.floor(Math.random() * useCaseList.length)];
            }

               if (districtType == 'law and security'){
                var useCaseList = ['a secure building with ease of access to main amenities and maintenance for all staff. Ensuring that when emergency protocols are in place the building is easily navigable by personnel','a building that upholds current values of law and order in a modern city','a building which stands out against the asphalt as a stalwart defence of justice','a building that beholds a hybrid of western traditional themes and minimalistic material usage, resulting in a physically fortified symbol of strength with an orchestration that simultaneously presents flexibility','a series of sculpted granular blocks which jut out over the main street view and separate the narrow work places in the upper story','an ultimately brutalist-modern building stacked with rough cut brickwork textiles that take tropes from classical western buildings; adorned by a statue of justice cast in bronze which stands watch over the entryway and guards the peace within','a building that uses exotic igneous rocks, cut as the main foundational walls and stepping stones that lead to an open, glass paned lobby. The vertical rise continues with the material yet leaving the build with an outdoor quadrangle area integrated into the ground plan. Walled terraces protrude from the stories, overhanging the courtyard and balancing the space with greenery'];
                var useCase = useCaseList[Math.floor(Math.random() * useCaseList.length)];
            }

             //Based on typology, find a base
            if (typology == 'low density') {
                var length = [Math.floor(Math.random() * 15 + 6)];
                var width = [Math.floor(Math.random() * 15 + 5)];
                 var height = [Math.floor(Math.random() * 9 + 4)];
            }
            if (typology == 'medium density') {
                var length = [Math.floor(Math.random() * 26 + 6)];
                var width = [Math.floor(Math.random() * 26 + 5)];
                var height = [Math.floor(Math.random() * 20 + 7)];
            }
            if (typology == 'high density') {
                var length = [Math.floor(Math.random() * 35 + 6)];
                var width = [Math.floor(Math.random() * 45 + 5)];
                var height = [Math.floor(Math.random() * 65 + 45)];
            }


            if (buildType == 'skyscraper'){
                    var height = [Math.floor(Math.random() * 250 + 150)];
                    var width = (height / 4);
                    var length = (height / 4);
                }

            if (buildType == 'enclosure'){
                var height = [Math.floor(Math.random() * 25 + 6 )];
                var width = [Math.floor(Math.random() * 130 + 10 )];
                var length = [Math.floor(Math.random() * 230 + 10 )];
            }

            if (buildType == 'garden'){
                var height = [Math.floor(Math.random() * 25 + 6 )];
                var width = [Math.floor(Math.random() * 130 + 10 )];
                var length = [Math.floor(Math.random() * 230 + 10 )];
            }

            if (districtType == 'transport' && typology == 'medium density'){
                var height = [Math.floor(Math.random() * 8 + 6 )];
                var width = [Math.floor(Math.random() * 130 + 10 )];
                var length = [Math.floor(Math.random() * 230 + 10 )];
            }

            if (districtType == 'transport' && typology == 'high density'){
                var height = [Math.floor(Math.random() * 25 + 6 )];
                var width = [Math.floor(Math.random() * 130 + 10 )];
                var length = [Math.floor(Math.random() * 230 + 10 )];
            }

                 buildingVolume = ['site size that has a total volume of ' + length + ' meters length, by ' + width + ' meters width, with a height of ' + height + ' meters', 'bounding site limit that has an available build volume of ' + length + ' meters length, by ' + width + ' meters width, with a height of ' + height + ' meters'];

                    if (buildType == 'skyscraper'){
                        buildingVolume = ['site size with a square base of ' + length + ' meters, with a height of ' + height + ' meters'];
                    }

                    var buildVolume = buildingVolume[Math.floor(Math.random() * buildingVolume.length)];


                //Set list to default
                var chooseList = ''

                //Define the possible sentence structures for the private client type. 
              if (clientType == 'private') {
                var clientList = ['Our ' + clientType + ' company is looking to expand by funding ' + useCase + '. We are looking for designs for a' + building + ' for immediate construction in the ' + districtType + ' area. After consulting with our director, the building will need to comply with ' + typology + ' building regulations and be ready for a ' + buildVolume + '. To receive the commission you will need to complete and submit a design to us in the next 12 business days.', 

                'We are a ' + clientType + ' business in requirement of a design for a' + building + '. After speaking with a surveyor and the local council for the '+ districtType +' district, we have received approval for a ' + typology + ' build and have a ' + buildVolume + ' for usable build space. The construction needs to provide ' + useCase + ' in order to fulfill our expectations.', 

                'As a long-time ' + clientType + ' company familiar with the '+ districtType +' sector and the typology density regulations therein, we have a stake on a new plot of land and need a design for a' + building + '. We are looking for a design which has ' + useCase + '. The surveyor has been consulted with directly and has given us the ' + buildVolume + '. The construction should adhere to a ' + typology + ' build. We look forward to seeing the designs as soon as possible.',

                'Greetings, we are a  '+ clientType +' business seeking a design for a' + building + ' in a '+ typology +' area of the '+ districtType +' district. We hope to begin construction on '+ useCase +' within the '+ buildVolume +'. Please send your designs to our email address within two weeks for the design to be considered.'];
            }

                
                //Define government Sentences              
            if (clientType == 'government') {
                var clientList = ['The '+ clientType +' '+ districtType +' sector is seeking a design for a' + building + ' in a '+ typology +' area. We hope to begin construction on '+ useCase +'. The build site should remain within the '+ buildVolume +'. Please send your design proposals to our existing office within two weeks to be considered for the commission.',

                'The state '+ clientType +' has indicated interest in collecting design proposals for a' + building + ' to be built in a '+ typology +', '+ districtType +' district. The design has been outlined for '+ useCase +'. A '+ buildVolume +' has been chosen for the construction.',

                'Recently implemented national '+ clientType +' regulations mean we have been given an opportunity to build a ' + typology +' construction that will take form as a' + building + ' in the local '+ districtType +' district. As such, we are seeking '+ useCase +'. The building should adhere to a '+ buildVolume +'.',

                'We are looking for a competitive design for a '+ clientType +' mandated building, a' + building + '. The construction will presuppose a '+ typology +' build within a '+ buildVolume +'. The design in question will be '+ useCase +'. The final construction will take place in the '+ districtType +' district.'];

            }
            //Grab finished sentence
            var chooseList = clientList[Math.floor(Math.random() * clientList.length)];

			// Insert concatenated sentence to document
            document.getElementById("brief").innerHTML = chooseList ;

        }
